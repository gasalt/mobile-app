declare module 'react-native-swipe-modal-up-down';
type ModalType = import("@/enums").ModalType
type ModalScreen = import("@/enums").ModalScreen

type ValueOf<T> = T[keyof T];

interface ModalProps {
    values?: any,
    onClose: () => void,
}

interface ModalsValue {
    size: ModalType,
    Screen: React.FC<ModalProps>
}

type Nullable<T> = T | null;

interface CurrencyData {
    id: string;
    address: string;
    name: string;
    symbol: string;
    logo: null | string;
    active: boolean;
    price: string,
    balance: string;
    decimals: number;
}
