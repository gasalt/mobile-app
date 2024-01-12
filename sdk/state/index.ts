import {create} from "zustand";
import Polygon from "@/assets/svgs/Polygon";
import { ModalScreen } from "@/types/enums";
import { zeroAddress } from "@/utils/constants";


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
    selectedNetwork: { id: 1, name: "Polygon" } as { [key: string]: any },
    selectedToken: { id: 1, name: "Polygon" } as { [key: string]: any },
    selectedFee: { id: 1, name: "Polygon" } as { [key: string]: any },
    tokenBalances: [] as { contractAddress: string; tokenBalance: string }[],
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


const configVars = {} as any

export const getVar = (variable: string | number, defaultValue?: string | number | boolean) => {
    let answer = configVars[variable]

    if(!answer) {
        answer = process.env[variable]
    }
    if(!answer && defaultValue) {
        answer = defaultState;
        configVars[variable] = defaultValue;
    }
    return answer;
}

