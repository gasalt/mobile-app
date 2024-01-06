import { useEffect, useState } from "react";
import { JsonRpcProvider, Wallet, BrowserProvider, Signer as SignerV6, keccak256, AbiCoder, getAddress } from "ethers";
import { useGlobalState } from "../state";

import { RelayProvider, } from "@opengsn/provider"
// import { ERC20__factory, GasaltPaymaster__factory, WalletFactory__factory } from '../../typechain-types';
import bytecode from "./bytecode";



const _provider = new JsonRpcProvider("https://rpc.ankr.com/eth_goerli")

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

const walletFactorAddress = "0xBe463ba8a009256aE7711532dE6d030AB8719e27"
const paymasterAddress = "0x8579c062A2229acBc5D397Db8679Fd4A21FcC8aF"
const preferredRelays = ["https://gsn-v3-beta-goerli.prjct.dev"]

export default function useWeb3() {
    const { privateKey, setKeyValue, masterAddress, address } = useGlobalState()
    const [provider] = useState(_provider)
    const [signer, setSigner] = useState<Wallet | null>(null)
    const [{ gsnProvider, gsnSigner, relayProvider }, setGsn] = useState<{ gsnProvider?: BrowserProvider, gsnSigner?: SignerV6, relayProvider?: RelayProvider }>({})

    useEffect(() => {
        // get gasalt address balance
        if (gsnProvider && address) {
            console.log("gasalt address", address)
            gsnProvider.getBalance(address).then(balance => {
                console.log("balance", balance.toString())
            })
        }
    }, [gsnProvider, gsnSigner, relayProvider])

    useEffect(() => {
        // get gasalt address
        if (masterAddress) {
            const address = getAddress(buildCreate2Address(walletFactorAddress, calcSalt(masterAddress, 0), bytecode))
            console.log("address", address, masterAddress)
            setKeyValue("address", address)
        }
    }, [masterAddress])

    useEffect(() => {
        (async () => {
            if (gsnProvider) {
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
                } catch (error) {
                    console.log("gsn error => ", error)
                }

            }
        })()
    }, [privateKey, provider])
}
