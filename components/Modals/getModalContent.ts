import { ModalScreen, ModalType } from "../../types/enums";
import AddressInfo from "./AddressInfo";
import Crypto from "./Crypto";
import MultiAddress from "./MultiAddress";
import QrCodeScan from "./QRCodeScan";
import SendModal from "./SendModal";


const modals: Record<ModalScreen, ModalsValue> = {
    [ModalScreen.AddressInfo]: {
        size: ModalType.Big,
        Screen: AddressInfo
    },
    [ModalScreen.QRCodeScan]: {
        size: ModalType.Big,
        Screen: QrCodeScan
    },
    [ModalScreen.SendModal]: {
        size: ModalType.Mid,
        Screen: SendModal
    },
    [ModalScreen.Crypto]: {
        size: ModalType.Big,
        Screen: Crypto
    },
    [ModalScreen.MultiAddress]: {
        size: ModalType.Big,
        Screen: MultiAddress
    },
    [ModalScreen.None]: {
        size: ModalType.None,
        Screen: (props: ModalProps) => null
    }
}

export default function getModalContent(modal: ModalScreen) {
    return modals[modal];
}
