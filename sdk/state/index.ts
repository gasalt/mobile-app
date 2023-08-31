import {create} from "zustand";


export const modals = ["QRCode", "Crypto", "Scan"] as const
export type ModalType = typeof modals[number] | undefined;

const defaultState = {
    modalComponent: undefined,
    value: {},
} as {
    modalComponent: ModalType,
    value: unknown,
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

