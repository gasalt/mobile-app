import {create} from "zustand";
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

