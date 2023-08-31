import { useRef, useState } from "react";
import { Dimensions, Platform, Pressable, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import * as Clipboard from "expo-clipboard";

import ClosedEye from "../../../assets/svgs/ClosedEye";
import { DefaultText, DefaultView } from "../../../components/Defaults";
import SwipeModal from "../../../components/SwipeModal";
import TabScreen from "../../../components/TabScreen";
import {
  DefaultState,
  ModalType,
  modals,
  useGlobalState,
} from "../../../sdk/state";

import PagerView from "react-native-pager-view";
import Copy from "../../../assets/svgs/Copy";
import Info from "../../../assets/svgs/Info";
import Polygon from "../../../assets/svgs/Polygon";
import CryptoDropdown from "../../../components/CryptoDrown";
import Send from "../../../components/Send";
import Swap from "../../../components/Swap";
import { guide } from "../../../styles";
import { animatedBottomTabLine } from "../../../utils/fx";
import CustomButton from "../../../components/CustomButton";
import Scanner from "../../../components/Scanner";
import CircleChecked from "../../../assets/svgs/CircleChecked";

const { width, height } = Dimensions.get("window");

export default function App() {
  const { modalComponent, setKeyValue } = useGlobalState();
  const PagerRef = useRef<any>();

  const [tab, setTab] = useState(0);
  const [position, setPosition] = useState(0);
  const [selectedButton, setSelectedButton] = useState<"address" | "eth">(
    "address"
  );
  const [copied, setCopied] = useState(false);

  // set marginTop dynamically
  const [marginTop, setMarginTop] = useState<number | undefined>(undefined);

  const slideBarPosition = animatedBottomTabLine(tab, position, width);

  const onSelectTab = (value: number) => {
    if (tab === value) return;
    PagerRef.current.setPage(value);
  };

  const onClose = () => {
    onPress({ type: "modalComponent", value: undefined }, undefined);
  };

  const onPress = (
    { type, value }: { type: keyof DefaultState; value: ModalType },
    top: number | undefined
  ) => {
    setKeyValue(type, value);
    setMarginTop(top);
  };

  const copyToClipboard = async (value: string) => {
    await Clipboard.setStringAsync(value);
    setCopied(true);
  };

  const getModalContent = () => {
    switch (modalComponent) {
      case "QRCode":
        return (
          <DefaultView style={{ flex: 1 }}>
            <DefaultView
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 48,
              }}
            >
              <DefaultText
                style={{ fontWeight: "600", fontSize: 24, lineHeight: 24 }}
              >
                Scan QR Code
              </DefaultText>
              <DefaultText
                style={{ fontWeight: "400", fontSize: 14, lineHeight: 20 }}
              >
                Scan the code to receive your payment
              </DefaultText>
            </DefaultView>

            <DefaultView
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pressable
                style={[
                  {
                    borderWidth: 1,
                    borderColor: "#4A41C7",
                    padding: 5,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderRightWidth: 0,
                  },
                  selectedButton === "address" && {
                    backgroundColor: "#4A41C7",
                  },
                ]}
                onPress={() => setSelectedButton("address")}
              >
                <DefaultText>Address</DefaultText>
              </Pressable>
              <Pressable
                style={[
                  {
                    borderWidth: 1,
                    borderColor: "#4A41C7",
                    padding: 5,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    borderLeftWidth: 0,
                  },
                  selectedButton === "eth" && {
                    backgroundColor: "#4A41C7",
                  },
                ]}
                onPress={() => setSelectedButton("eth")}
              >
                <DefaultText>Eth Domain</DefaultText>
              </Pressable>
            </DefaultView>

            <DefaultView
              style={{
                marginVertical: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <QRCode value="https://" size={200} />
            </DefaultView>

            <DefaultView
              style={{
                backgroundColor: "#BBB8EA",
                paddingVertical: 12,
                paddingHorizontal: 16,
                marginHorizontal: 20,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DefaultText style={{ color: guide.primary, lineHeight: 24 }}>
                TRY2Pczuiuadsak3VcQSmupPwtVUTYPq2X
              </DefaultText>
            </DefaultView>

            <DefaultView style={{ paddingHorizontal: 16, marginTop: 24 }}>
              <CustomButton label="Copy" variant="primary" />
            </DefaultView>
          </DefaultView>
        );

      case "Scan":
        return <Scanner onClose={onClose} />;

      default:
        return (
          <DefaultView>
            <DefaultText>Default modal view</DefaultText>
          </DefaultView>
        );
    }
  };

  return (
    <TabScreen>
      {/* Balance view */}
      <DefaultView style={styles.balanceContainer}>
        <DefaultView style={styles.totalBalanceContainer}>
          <DefaultText style={{ fontSize: 16, fontWeight: "400" }}>
            Total balance
          </DefaultText>
          <ClosedEye />
        </DefaultView>

        <DefaultView
          style={{
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 20,
          }}
        >
          <DefaultText
            style={{ fontSize: 32, lineHeight: 32, fontWeight: "600" }}
          >
            3,530.84
          </DefaultText>
          <CryptoDropdown
            onPress={() =>
              onPress({ type: "modalComponent", value: "Crypto" }, 50)
            }
            text="MATIC"
            logo={<Polygon />}
          />
        </DefaultView>
        <DefaultText style={{ color: "#9DF190", marginLeft: 36 }}>
          ~2,234.77 USD
        </DefaultText>

        <DefaultView style={styles.cryptoAddress}>
          <Info
            onPress={() =>
              onPress({ type: "modalComponent", value: "QRCode" }, 50)
            }
          />
          <DefaultText style={{ color: guide.primary }}>
            0xE7E2cB8c81c10...C9Ce62EC754
          </DefaultText>

          {copied ? (
            <CircleChecked />
          ) : (
            <Copy
              onPress={() => copyToClipboard("0xE7E2cB8c81c10...C9Ce62EC754")}
            />
          )}
        </DefaultView>
      </DefaultView>

      {/* Tabs */}
      <DefaultView style={{ width, marginTop: 20 }}>
        <DefaultView style={styles.tabContainer}>
          <Pressable onPress={() => onSelectTab(0)}>
            <DefaultText
              style={[styles.tabText, tab === 0 && styles.activeText]}
            >
              Send
            </DefaultText>
          </Pressable>

          <Pressable onPress={() => onSelectTab(1)}>
            <DefaultText
              style={[styles.tabText, tab === 1 && styles.activeText]}
            >
              Swap
            </DefaultText>
          </Pressable>
          <DefaultView
            style={{
              width: width / 4,
              borderBottomColor: "#4A41C7",
              left: slideBarPosition,
              bottom: -1.5,
              borderBottomWidth: 2,
              position: "absolute",
            }}
          />
        </DefaultView>

        <PagerView
          ref={PagerRef}
          style={styles.pager}
          initialPage={0}
          onPageScroll={(e) => {
            setTab(e.nativeEvent.position);
            setPosition(e.nativeEvent.offset);
          }}
        >
          <Send key={"1"} onPress={onPress} />
          <Swap key={"2"} onPress={onPress} />
        </PagerView>
      </DefaultView>

      <SwipeModal
        showModal={modals.includes(modalComponent as (typeof modals)[number])}
        onClose={onClose}
        headerStyle={{ marginTop }}
        contentModal={getModalContent()}
        contentModalStyle={{ marginTop }}
      />
    </TabScreen>
  );
}

const styles = StyleSheet.create({
  balanceContainer: {
    backgroundColor: "#191832",
    width: width * 0.9,
    paddingTop: 20,
    paddingHorizontal: 12,
    marginHorizontal: 20,
    borderRadius: 12,
    marginTop: 6,
  },
  totalBalanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    justifyContent: "center",
    marginBottom: 8,
  },

  cryptoAddress: {
    backgroundColor: "#BBB8EA",
    paddingVertical: 10,
    paddingHorizontal: 4,
    margin: 20,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
  },
  tabContainer: {
    borderBottomColor: "#403E59",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    lineHeight: 24,
    width: width / 2,
    textAlign: "center",
    color: "#868693",
  },
  activeText: {
    color: "#fff",
  },

  pager: {
    height: Platform.OS === "android" ? height * 0.5 : height * 0.45,
    width,
  },
});
