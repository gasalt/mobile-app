import { useEffect, useState } from "react";
import {
    JsonRpcProvider,
    Wallet,
    BrowserProvider,
    Signer as SignerV6,
    keccak256,
    AbiCoder,
    getAddress,
    formatUnits
} from "ethers";
import { useGlobalState } from "../state";

import { RelayProvider, } from "@opengsn/provider"
import {
    WalletFactory__factory,
    // ERC20__factory,
    // GasaltPaymaster__factory
} from '../../typechain-types';
import bytecode from "./bytecode";
import { paymasterAddress, preferredRelays, rpcURL, walletFactoryAddress, zeroAddress } from "@/utils/constants";
import axios from "axios";
import * as CG from './coingecko'
import { convertToBase64 } from "@/utils/image";



const _provider = new JsonRpcProvider(rpcURL)

function buildCreate2Address(creatorAddress = "", saltHex = "", byteCode = "") {
    return `0x${keccak256(
        `0x${["ff", creatorAddress, saltHex, keccak256(byteCode)]
            .map((x) => {
                return x.replace(/0x/, "");
            })
            .join("")}`
    )
        .slice(-40)}`.toLowerCase();
}

function calcSalt(sender = "", index = 0) {
    return keccak256(
        AbiCoder.defaultAbiCoder().encode(["address", "uint256"], [sender, index])
    );
}

async function getAddressTokens(address: string) {
    const res = await axios.post(
      "https://eth-goerli.g.alchemy.com/v2/vBE5Q3AtXuqJNU9XWCb6ajgN8fQHXjty",
      {
        "jsonrpc": "2.0",
        "method": "alchemy_getTokenBalances",
        "params": [
          address
        ],
        "id": 42
      }
    )
    const addrTokens = res.data?.result?.tokenBalances
    return addrTokens
  }

  async function getTokenDetails(tokendAddress: string) {
    const res = await axios.post(
      "https://eth-goerli.g.alchemy.com/v2/vBE5Q3AtXuqJNU9XWCb6ajgN8fQHXjty",
      {
        "id": 1,
        "jsonrpc": "2.0",
        "method": "alchemy_getTokenMetadata",
        "params": [
          tokendAddress
        ]
      }
    )
    const tokenDetails = res.data?.result
    return tokenDetails
  }


export default function useWeb3() {
    const { privateKey, setKeyValue, masterAddress, address, selectedNetwork , selectedCurrency, selectedFeeCurrency } = useGlobalState()
    const [provider] = useState(_provider)
    const [signer, setSigner] = useState<Wallet | null>(null)
    const [{ gsnProvider, gsnSigner }, setGsn] = useState<{ gsnProvider?: BrowserProvider, gsnSigner?: SignerV6, relayProvider?: RelayProvider }>({})

    useEffect(() => {
        // get gasalt address balance
        
        (async () => {
            const currencyData = [
                {
                    id: 'ethereum',
                    address: zeroAddress,
                    name: "Ethereum",
                    symbol: "ETH",
                    logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
                    active: true,
                    price: "0",
                    balance: "0",
                    decimals: 18,
                }
            ]

            if (gsnProvider && address !== zeroAddress && selectedNetwork) {
                console.log("gasalt address", address)
                const { price } = await CG.getTokenLogoAndPrice(currencyData[0].id)
                gsnProvider.getBalance(address).then(balance => {
                    console.log("balance", balance.toString())
                    currencyData[0].balance = balance.toString(10)
                    currencyData[0].price = price
                })
                const addrTokens = await getAddressTokens(address)

                for(const addrToken of addrTokens) {
                    const tokenDetails = await getTokenDetails(addrToken.contractAddress)
                    const tokenId = CG.findTokenId(tokenDetails?.symbol);
                    const { logo, price } = tokenId ? await CG.getTokenLogoAndPrice(tokenId) : { logo: '', price: '0'}
                    const data = {
                        id: tokenId || tokenDetails?.symbol.toLowerCase(),
                        address: addrToken.contractAddress,
                        name: tokenDetails?.name,
                        symbol: tokenDetails?.symbol,
                        logo,
                        price,
                        active: true,
                        balance: (Number(addrToken?.tokenBalance)).toString(),
                        decimals: tokenDetails?.decimals
                    }

                    if(data.logo) {
                        await convertToBase64(logo, function(logoBase64: string) {
                            data.logo = logoBase64;
                        })
                    }
                    currencyData.push(data)
                }
                setKeyValue("currencyData", currencyData)
                const updatedSelectedCurrency = currencyData.find((currency) => currency.address === selectedCurrency.address)
                const updatedSelectedFeeCurrency = currencyData.find((currency) => currency.address === selectedFeeCurrency.address)
                if(updatedSelectedCurrency){
                    setKeyValue("selectedCurrency", updatedSelectedCurrency)
                }
                if(updatedSelectedFeeCurrency){
                    setKeyValue("selectedFeeCurrency", updatedSelectedFeeCurrency)
                }
                console.log("currencyData loaded")

            }
        })()
    }, [gsnProvider, address, selectedNetwork])

    useEffect(() => {
        // get gasalt address
        (async () => {
            if (masterAddress && gsnSigner) {
                const address = getAddress(buildCreate2Address(walletFactoryAddress, calcSalt(masterAddress, 0), bytecode))
                console.log("address", address, masterAddress)
                setKeyValue("address", address)
                const gasalt = WalletFactory__factory.connect(walletFactoryAddress, gsnSigner)
                setKeyValue("gasalt", gasalt)
            }
        })()

    }, [masterAddress, gsnSigner])

    useEffect(() => {
        (async () => {
            if (gsnProvider && gsnSigner) {
                console.log("provider exists")
                return
            }
            if (privateKey) {
                const _signer = new Wallet(privateKey, provider)
                setSigner(_signer)
                const masterAddress = await _signer?.getAddress()
                console.log("masterAddress", masterAddress)
                setKeyValue("masterAddress", masterAddress)
                // setKeyValue("address", masterAddress)
                try {
                    const { relayProvider: _relayProvider, gsnProvider: _gsnProvider, gsnSigner: _gsnSigner } = await RelayProvider.newEthersV6Provider({
                        provider: _signer,
                        config: {
                            paymasterAddress: paymasterAddress,
                            performDryRunViewRelayCall: true,
                            maxApprovalDataLength: 65,
                            preferredRelays: preferredRelays,
                        }
                    });
                    setGsn({ gsnProvider: _gsnProvider, gsnSigner: _gsnSigner, relayProvider: _relayProvider })
                    setKeyValue("gsnProvider", _gsnProvider)
                    setKeyValue("gsnSigner", _gsnSigner)
                    setKeyValue("relayProvider", _relayProvider)
                    setKeyValue("masterSigner", _signer)
                } catch (error) {
                    console.log("gsn error => ", error)
                }

            }
        })()
    }, [privateKey, provider])
}
