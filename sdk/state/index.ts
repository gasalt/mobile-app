import {create} from "zustand";

const defaultState = {
    modalComponent: false,
    value: "hello",
}

type DefaultState = typeof defaultState
type SetKeyValue = <K extends keyof DefaultState>(key: K, value: DefaultState[K]) => void;
interface GlobalState extends DefaultState {
    setKeyValue: SetKeyValue
}

export const useGlobalState = create<GlobalState>((set, get) => ({
    ...defaultState,
    setKeyValue: (key: keyof DefaultState, value: ValueOf<DefaultState>) => set({[key]: value}),
}))

