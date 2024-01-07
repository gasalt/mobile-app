import {create} from "zustand";
import { ModalScreen } from "@/types/enums";
import { zeroAddress } from "@/utils/constants";
import { BrowserProvider, Signer as SignerV6 } from "ethers";
import { RelayProvider, } from "@opengsn/provider"
import { WalletFactory } from "@/typechain-types";
import { Wallet } from "ethers";

let gsnProvider: BrowserProvider = null as unknown as BrowserProvider,
    gsnSigner: SignerV6 = null as unknown as SignerV6 ,
    relayProvider: RelayProvider = null as unknown as RelayProvider,
    gasalt: WalletFactory = null as unknown as WalletFactory,
    masterSigner: Wallet = null as unknown as Wallet;


const defaultState = {
    modalComponent: {
        screen: ModalScreen.None,
        values: {} as unknown
    },
    session: {
        completedOnboarding: false,
        isLoggedIn: false,
    },
    privateKey: "",
    email: "",
    masterAddress: zeroAddress,
    address: zeroAddress,
    gsnProvider,
    gsnSigner,
    relayProvider,
    gasalt,
    masterSigner,
    selectedNetwork: 5,
}

export type DefaultState = typeof defaultState
type SetKeyValue = <K extends keyof DefaultState>(key: K, value: DefaultState[K]) => void;
interface GlobalState extends DefaultState {
    setKeyValue: SetKeyValue
}

export const useGlobalState = create<GlobalState>((set, get) => ({
    ...defaultState,
    setKeyValue: (key: keyof DefaultState, value: ValueOf<DefaultState>) => set({[key]: value}),
}))

