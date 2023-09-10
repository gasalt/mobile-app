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
