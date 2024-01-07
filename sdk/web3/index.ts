import { useEffect, useState } from "react";
import {
    JsonRpcProvider,
    Wallet,
    BrowserProvider,
    Signer as SignerV6,
    keccak256,
    AbiCoder,
    getAddress
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



export default function useWeb3() {
    const { privateKey, setKeyValue, masterAddress, address } = useGlobalState()
    const [provider] = useState(_provider)
    const [signer, setSigner] = useState<Wallet | null>(null)
    const [{ gsnProvider, gsnSigner }, setGsn] = useState<{ gsnProvider?: BrowserProvider, gsnSigner?: SignerV6, relayProvider?: RelayProvider }>({})

    useEffect(() => {
        // get gasalt address balance
        if (gsnProvider && address !== zeroAddress) {
            console.log("gasalt address", address)
            gsnProvider.getBalance(address).then(balance => {
                console.log("balance", balance.toString())
            })
        }
    }, [gsnProvider, address])

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
