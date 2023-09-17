import {  Platform } from "react-native";

export enum ModalType {
    Big = Platform.OS === "ios" ? 160 : 100,
    Mid = 300,
    Small = 450,
    None = 0
}

export enum ModalScreen {
    None = 0,
    AddressInfo,
    QRCodeScan,
    Crypto,
    SendModal,
    MultiAddress
}