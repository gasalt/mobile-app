import { DefaultText, DefaultView } from "./Defaults";
import { Pressable, StyleSheet, TextInput } from "react-native";
import CustomButton from "./CustomButton";
import CryptoDropdown from "./CryptoDrown";
import Polygon from "../assets/svgs/Polygon";
import BNB from "../assets/svgs/BNB";
import Refresh from "../assets/svgs/Refresh";
import { useState } from "react";
import { DefaultState, ModalType } from "../sdk/state";


interface SwapProps {
  onPress: (
    {
      type,
      value,
    }: {
      type: keyof DefaultState;
      value: ModalType;
    },
    top: number | undefined
  ) => void;
}
export default function Swap({onPress}: SwapProps) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <DefaultView style={styles.container}>
      <DefaultView style={{ position: "relative" }}>
        <DefaultView style={styles.itemBox}>
          <DefaultView style={styles.item}>
            <DefaultText>From</DefaultText>
            <DefaultText style={{ color: "#9DF190", fontWeight: "500" }}>
              MAX
            </DefaultText>
          </DefaultView>
          <DefaultView style={styles.item}>
            <TextInput
              style={styles.text}
              value={from}
              inputMode="decimal"
              returnKeyType="done"
              onChangeText={(text) => setFrom(text)}
              autoFocus
            />

            <CryptoDropdown
              btnStyle={styles.btnStyle}
              onPress={() => onPress({ type: "modalComponent", value: "Crypto" }, 200)}
              text="MATIC"
              logo={<Polygon />}
            />
          </DefaultView>
        </DefaultView>
        <Pressable style={styles.refresh}>
          <Refresh />
        </Pressable>
        <DefaultView style={[styles.itemBox, { marginBottom: 8 }]}>
          <DefaultView style={styles.item}>
            <DefaultText>To</DefaultText>
            <DefaultText
              style={{ color: "#9DF190", fontWeight: "500" }}
            ></DefaultText>
          </DefaultView>
          <DefaultView style={styles.item}>
            <TextInput
              style={styles.text}
              value={to}
              inputMode="decimal"
              returnKeyType="done"
              onChangeText={(text) => setTo(text)}
              autoFocus
            />
            <CryptoDropdown
              btnStyle={styles.btnStyle}
              onPress={() => onPress({ type: "modalComponent", value: "Crypto" }, 200)}
              text="BNB"
              logo={<BNB />}
            />
          </DefaultView>
        </DefaultView>
      </DefaultView>

      <DefaultView style={[styles.itemBox, { marginBottom: 12 }]}>
        <DefaultView style={styles.item}>
          <DefaultText style={{ fontSize: 12 }}>Rate</DefaultText>
          <DefaultView style={{ flexDirection: "row" }}>
            <DefaultText style={{ color: "#9DF190" }}>
              1MATIC = 0.034BNB
            </DefaultText>
            <DefaultText>($1.33)</DefaultText>
          </DefaultView>
        </DefaultView>
        <DefaultView style={styles.item}>
          <DefaultText style={{ fontSize: 12 }}>Fee</DefaultText>
          <DefaultView
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <DefaultText style={{ left: 30 }}>0.05</DefaultText>
            <CryptoDropdown
              textStyle={styles.textStyle}
              btnStyle={styles.btnStyle}
              onPress={() => onPress({ type: "modalComponent", value: "Crypto" }, 200)}
              text="MATIC"
              showLogo={false}
              logo={<Polygon />}
            />
          </DefaultView>
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
  itemBox: {
    marginHorizontal: 10,
    marginTop: 5,
    backgroundColor: "#191832",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    height:85
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
  text: {
    fontWeight: "500",
    fontSize: 24,
    color: "white",
    flex: 1,
  },
  btnStyle: {
    right: -20,
  },
  refresh: {
    position: "absolute",
    backgroundColor: "#2C257E",
    width: 48,
    height: 48,
    borderRadius: 64,
    top: 70,
    left: 150,
    zIndex: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
