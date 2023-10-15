import { useEffect, useState } from "react";
import { JsonRpcProvider, Wallet, BrowserProvider, Signer as SignerV6,  } from "ethers";
import { useGlobalState } from "../state";
// /Users/orewoley/prjct/apps/gasalt/gasalt_mobile_app/node_modules/@opengsn/provider/dist/RelayProvider.js
// Change dynamic import in newEthersV6Provider to const { BrowserProvider } = require('ethers-v6/providers');

import { RelayProvider, } from "@opengsn/provider"


const _provider = new JsonRpcProvider("https://rpc.ankr.com/eth_goerli")

export default function useWeb3() {
    const { privateKey, setKeyValue } = useGlobalState()
    const [provider] = useState(_provider)
    const [signer, setSigner] = useState<Wallet | null>(null)
    const [{ gsnProvider, gsnSigner, relayProvider }, setGsn] = useState<{gsnProvider?: BrowserProvider, gsnSigner?: SignerV6, relayProvider?: RelayProvider}>({})

    useEffect(() => {
        if(gsnProvider&&gsnSigner&&relayProvider) {
            gsnSigner.getAddress().then(address => {
                gsnProvider.getBalance(address).then(balance => {
                    console.log("balance", balance.toString())
                })
            })
        }
    },[gsnProvider, gsnSigner, relayProvider])

    useEffect(() => {
        (async () => {
            if (privateKey) {
                const _signer = new Wallet(privateKey, provider)
                setSigner(_signer)
                const masterAddress = await _signer?.getAddress()
                console.log("masterAddress", masterAddress)
                setKeyValue("masterAddress", masterAddress)
                setKeyValue("address", masterAddress)
                try {
                    const {relayProvider:_relayProvider, gsnProvider:_gsnProvider, gsnSigner:_gsnSigner} = await RelayProvider.newEthersV6Provider({
                        provider: _signer,
                        config: {
                            paymasterAddress: "0x8579c062A2229acBc5D397Db8679Fd4A21FcC8aF",
                            performDryRunViewRelayCall: true,
                            maxApprovalDataLength: 65,
                            preferredRelays: ["https://gsn-v3-beta-goerli.prjct.dev"],
                        }
                    });
                    setGsn({gsnProvider: _gsnProvider, gsnSigner: _gsnSigner, relayProvider: _relayProvider})
                } catch (error) {
                    console.log("gsn error => ",error)
                }
                
            }
        })()
    }, [privateKey, provider])
}
