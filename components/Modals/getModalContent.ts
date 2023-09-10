import { ModalScreen, ModalType } from "../../types/enums";
import AddressInfo from "./AddressInfo";
import Crypto from "@/components/Modals/Crypto";
import MultiAddress from "@/components/Modals/MultiAddress";
import QrCodeScan from "@/components/Modals/QRCodeScan";
import SendModal from "@/components/Modals/SendModal";


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
