import { useState } from "react";
import Close from "../assets/svgs/Close";
import QR from "../assets/svgs/QR";
import { DefaultText, DefaultView } from "./Defaults";
import FloatingTextInput from "./inputs/FloatingInput";
import { Pressable, StyleSheet } from "react-native";
import AddMultiple from "../assets/svgs/AddMultiple";
import CustomButton from "./CustomButton";
import CryptoDropdown from "./CryptoDrown";
import Polygon from "../assets/svgs/Polygon";

export default function Send() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <DefaultView style={styles.container}>
      <FloatingTextInput
        label="Recipient's Address"
        rightElement={address === "" ? <QR /> : <Close />}
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
              onPress={() => alert("MATIC")}
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
    paddingVertical: .5
  },
});
