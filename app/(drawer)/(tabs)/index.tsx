import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";
import * as Clipboard from "expo-clipboard";

import ClosedEye from "@/assets/svgs/ClosedEye";
import { DefaultText, DefaultView } from "@/components/Defaults";
import SwipeModal from "@/components/SwipeModal";
import TabScreen from "@/components/TabScreen";
import { useGlobalState } from "@/sdk/state";

import PagerView from "react-native-pager-view";
import Copy from "@/assets/svgs/Copy";
import Info from "@/assets/svgs/Info";
import Polygon from "@/assets/svgs/Polygon";
import CryptoDropdown from "@/components/CryptoDrown";
import Send from "@/components/Send";
import Swap from "@/components/Swap";
import { guide } from "@/styles";
import { animatedBottomTabLine } from "@/utils/fx";
import CircleChecked from "@/assets/svgs/CircleChecked";
import { ModalScreen } from "@/types/enums";
import Eye from "@/assets/svgs/Eye";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function App() {
  const { setKeyValue } = useGlobalState();
  const PagerRef = useRef<any>();

  const [tab, setTab] = useState(0);
  const [position, setPosition] = useState(0);

  const [hideBalance, setHideBalance] = useState(false);
  const [copied, setCopied] = useState(false);

  const slideBarPosition = animatedBottomTabLine(tab, position, width);

  const onSelectTab = (value: number) => {
    if (tab === value) return;
    PagerRef.current.setPage(value);
  };

  const copyToClipboard = async (value: string) => {
    await Clipboard.setStringAsync(value);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <TabScreen>
      <ScrollView style={{ marginTop: 50 }} contentContainerStyle={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* Balance view */}
          <DefaultView style={styles.balanceContainer}>
            <DefaultView style={styles.totalBalanceContainer}>
              <DefaultText style={{ fontSize: 16, fontWeight: "400" }}>
                Total balance
              </DefaultText>
              {hideBalance ? (
                <Pressable onPress={() => setHideBalance(false)}>
                  <Eye />
                </Pressable>
              ) : (
                <Pressable onPress={() => setHideBalance(true)}>
                  <ClosedEye />
                </Pressable>
              )}
            </DefaultView>

            <DefaultView
              style={{
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 20,
                alignSelf: "center",
              }}
            >
              {hideBalance ? (
                <DefaultText
                  style={{
                    fontSize: 32,
                    lineHeight: 32,
                    top: 8,
                    fontWeight: "600",
                  }}
                >
                  ******
                </DefaultText>
              ) : (
                <DefaultText
                  style={{ fontSize: 32, lineHeight: 32, fontWeight: "600" }}
                >
                  3,530.84
                </DefaultText>
              )}
              <CryptoDropdown
                onPress={() =>
                  setKeyValue("modalComponent", {
                    screen: ModalScreen.Crypto,
                    values: {},
                  })
                }
                text="MATIC"
                logo={<Polygon />}
              />
            </DefaultView>
            {hideBalance ? (
              <DefaultText style={{ color: "#9DF190", marginLeft: 72 }}>
                *******
              </DefaultText>
            ) : (
              <DefaultText style={{ color: "#9DF190", marginLeft: 36 }}>
                ~2,234.77 USD
              </DefaultText>
            )}

            <DefaultView style={styles.cryptoAddress}>
              <Info
                onPress={() =>
                  setKeyValue("modalComponent", {
                    screen: ModalScreen.AddressInfo,
                    values: {},
                  })
                }
              />
              <DefaultText style={{ color: guide.primary }}>
                0xE7E2cB8c81c10...C9Ce62EC754
              </DefaultText>

              {copied ? (
                <CircleChecked />
              ) : (
                <Copy
                  onPress={() =>
                    copyToClipboard("0xE7E2cB8c81c10...C9Ce62EC754")
                  }
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
              <Send key={"1"} />
              <Swap key={"2"} />
            </PagerView>
          </DefaultView>

          <SwipeModal />
        </KeyboardAvoidingView>
      </ScrollView>
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
    gap: 8,
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
