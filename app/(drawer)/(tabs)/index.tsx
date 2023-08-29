import TabScreen from "../../../components/TabScreen";
import { useGlobalState } from "../../../sdk/state";
import { DefaultText, DefaultView } from "../../../components/Defaults";
import SwipeModal from "../../../components/SwipeModal";
import ClosedEye from "../../../assets/svgs/ClosedEye";
import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";

import { guide } from "../../../styles";
import CryptoDropdown from "../../../components/CryptoDrown";
import Info from "../../../assets/svgs/Info";
import Copy from "../../../assets/svgs/Copy";
import { useRef, useState } from "react";
import PagerView from "react-native-pager-view";
import Send from "../../../components/Send";
import Swap from "../../../components/Swap";
import Polygon from "../../../assets/svgs/Polygon";
import { animatedBottomTabLine } from "../../../utils/fx";

const { width, height } = Dimensions.get("window");

export default function App() {
  const { modalComponent, setKeyValue } = useGlobalState();
  const PagerRef = useRef<any>();

  const [tab, setTab] = useState(0);
  const [position, setPosition] = useState(0);

 const slideBarPosition = animatedBottomTabLine(tab, position, width);

  const onSelectTab = (value: number) => {
    if (tab === value) return;
    PagerRef.current.setPage(value);
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
            onPress={() => alert("MATIC")}
            text="MATIC"
            logo={<Polygon />}
          />
        </DefaultView>
        <DefaultText style={{ color: "#9DF190", marginLeft: 36 }}>
          ~2,234.77 USD
        </DefaultText>

        <DefaultView style={styles.cryptoAddress}>
          <Info />
          <DefaultText style={{ color: guide.primary }}>
            0xE7E2cB8c81c10...C9Ce62EC754
          </DefaultText>
          <Copy />
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

      <SwipeModal
        showModal={modalComponent}
        setShowModal={(value: boolean) => setKeyValue("modalComponent", value)}
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
