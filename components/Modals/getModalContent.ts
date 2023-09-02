import { ModalScreen, ModalType } from "../../types/enums";
import AddressInfo from "./AddressInfo";
import QrCodeScan from "./QRCodeScan";


const modals: Record<ModalScreen, ModalsValue> = {
    [ModalScreen.AddressInfo]: {
        size: ModalType.Big,
        Screen: AddressInfo
    },
    [ModalScreen.QRCodeScan]: {
        size: ModalType.Big,
        Screen: QrCodeScan
    },
    [ModalScreen.Crypto]: {
        size: ModalType.Big,
        Screen: (props: ModalProps) => null
    },
    [ModalScreen.None]: {
        size: ModalType.None,
        Screen: (props: ModalProps) => null
    }
}

export default function getModalContent(modal: ModalScreen) {
    return modals[modal];
}
