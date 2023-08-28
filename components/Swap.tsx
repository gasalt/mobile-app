import { DefaultText, DefaultView } from "./Defaults";
import { Pressable, StyleSheet, useWindowDimensions } from "react-native";
import CustomButton from "./CustomButton";
import CryptoDropdown from "./CryptoDrown";
import Polygon from "../assets/svgs/Polygon";
import BNB from "../assets/svgs/BNB";
import Refresh from "../assets/svgs/Refresh";

export default function Swap() {
  const { width } = useWindowDimensions();

  return (
    <DefaultView style={styles.container}>
      <DefaultView style={{ position: "relative" }}>
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
            <DefaultText>From</DefaultText>
            <DefaultText style={{ color: "#9DF190", fontWeight: "500" }}>
              MAX
            </DefaultText>
          </DefaultView>
          <DefaultView style={styles.item}>
            <DefaultText style={{ fontWeight: "500", fontSize: 24 }}>
              8
            </DefaultText>
            <CryptoDropdown
              btnStyle={styles.btnStyle}
              onPress={() => alert("MATIC")}
              text="MATIC"
              logo={<Polygon />}
            />
          </DefaultView>
        </DefaultView>
        <Pressable
          style={{
            position: "absolute",
            backgroundColor: "#2C257E",
            width: 48,
            height: 48,
            borderRadius: 64,
            top: 80,
            left: 150,
            zIndex: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Refresh />
        </Pressable>
        <DefaultView
          style={{
            margin: 10,
            backgroundColor: "#191832",
            marginTop: -2,
            paddingHorizontal: 12,
            borderRadius: 8,
          }}
        >
          <DefaultView style={styles.item}>
            <DefaultText>From</DefaultText>
            <DefaultText
              style={{ color: "#9DF190", fontWeight: "500" }}
            ></DefaultText>
          </DefaultView>
          <DefaultView style={styles.item}>
            <DefaultText style={{ fontWeight: "500", fontSize: 24 }}>
              0
            </DefaultText>
            <CryptoDropdown
              btnStyle={styles.btnStyle}
              onPress={() => alert("BNB")}
              text="BNB"
              logo={<BNB />}
            />
          </DefaultView>
        </DefaultView>
      </DefaultView>

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
              onPress={() => alert("MATIC")}
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
    right: -20,
  },
});
