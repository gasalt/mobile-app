import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

import Close from "../assets/svgs/Close";
import QR from "../assets/svgs/QR";
import { DefaultText, DefaultView } from "./Defaults";
import FloatingTextInput from "./inputs/FloatingInput";
import AddMultiple from "../assets/svgs/AddMultiple";
import CustomButton from "./CustomButton";
import CryptoDropdown from "./CryptoDrown";
import Polygon from "../assets/svgs/Polygon";
import { useGlobalState } from "../sdk/state";
import { ModalScreen } from "../types/enums";


export default function Send() {
  const {setKeyValue} = useGlobalState();
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const onPress = () => setKeyValue("modalComponent", {values: {}, screen: ModalScreen.Crypto})

  return (
    <DefaultView style={styles.container}>
      <FloatingTextInput
        label="Recipient's Address"
        rightElement={
          address === "" ? (
            <QR onPress={() => setKeyValue("modalComponent", {values: {}, screen: ModalScreen.QRCodeScan})} />
          ) : (
            <Close onPress={() => setAddress("")} />
          )
        }
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <Pressable style={styles.multiple}>
        <AddMultiple />
        <DefaultText>Send to multiple addresses</DefaultText>
      </Pressable>

      <FloatingTextInput
        label="Amount"
        rightElement={
          <Pressable>
            <DefaultText style={{ color: "#9DF190" }}>MAX</DefaultText>
          </Pressable>
        }
        value={amount}
        onChangeText={(text) => setAmount(text)}
        mode="decimal"
      />

      <DefaultView
        style={{
          margin: 10,
          backgroundColor: "#191832",
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
        }}
      >
        <DefaultView style={styles.item}>
          <DefaultText>Fee</DefaultText>
          <DefaultView
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: -20,
            }}
          >
            <DefaultText style={{ left: 15 }}>0.05</DefaultText>
            <CryptoDropdown
              textStyle={styles.textStyle}
              btnStyle={styles.btnStyle}
              onPress={onPress}
              text="MATIC"
              showLogo={false}
              logo={<Polygon />}
            />
          </DefaultView>
        </DefaultView>
        <DefaultView style={styles.item}>
          <DefaultText>Total</DefaultText>
          <DefaultText>1,000.00MATIC</DefaultText>
        </DefaultView>
      </DefaultView>

      <DefaultView style={{ paddingHorizontal: 12 }}>
        <CustomButton label="Send" variant="primary" />
      </DefaultView>
    </DefaultView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 12 },
  multiple: {
    flexDirection: "row",
    gap: 4,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
    alignItems: "center",
  },
  textStyle: {
    color: "#A69FFF",
    fontSize: 10,
  },
  btnStyle: {
    width: 70,
    paddingVertical: 0.5,
  },
});
