import { useEffect, useState } from "react";
import { JsonRpcProvider, Wallet } from "ethers";
import { useGlobalState } from "../state";

const _provider = new JsonRpcProvider("https://rpc.ankr.com/eth_goerli")

export default function useWeb3() {
    const {privateKey, setKeyValue} = useGlobalState()
    const [provider] = useState(_provider)
    const [signer, setSigner] = useState<Wallet|null>(null)
    useEffect(() => {
        (async () => {
            if(privateKey){
                const _signer = new Wallet(privateKey, provider)
                setSigner(_signer)
                const masterAddress = await _signer?.getAddress()
                setKeyValue("masterAddress", masterAddress)
                setKeyValue("address", masterAddress)
            }
        })()
    },[privateKey, provider])
}
