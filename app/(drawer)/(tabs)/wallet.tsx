import { useEffect, useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import * as Clipboard from "expo-clipboard";

import ClosedEye from "@/assets/svgs/ClosedEye";
import { DefaultText, DefaultView } from "@/components/Defaults";
import SwipeModal from "@/components/SwipeModal";
import TabScreen from "@/components/TabScreen";
import { useGlobalState } from "@/sdk/state";

import Copy from "@/assets/svgs/Copy";
import Info from "@/assets/svgs/Info";
import CryptoDropdown from "@/components/CryptoDrown";
import Send from "@/components/Send";
import Swap from "@/components/Swap";
import { guide } from "@/styles";
import CircleChecked from "@/assets/svgs/CircleChecked";
import { ModalScreen } from "@/types/enums";
import Eye from "@/assets/svgs/Eye";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import useWeb3 from "@/sdk/web3";
import formatAddress from "@/utils/formatAddress";
import { formatUnits } from "ethers";
import CoinLogo from "@/assets/svgs/CoinLogo";
import useSelected from "@/hooks/useSelected";

const { width, height } = Dimensions.get("window");

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const { setKeyValue, address } = useGlobalState();
  useWeb3()
  const {selectedCurrency: currency} = useSelected()

  const [hideBalance, setHideBalance] = useState(true);
  const [copied, setCopied] = useState(false);

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
      <ScrollView style={{marginTop: 50}} contentContainerStyle={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined }
          style={{flex: 1}}
        >
           {/* Balance view */}
           <DefaultView style={styles.balanceContainer}>
            <DefaultView style={styles.totalBalanceContainer}>
              <DefaultText style={{ fontSize: 16, fontWeight: "400", borderWidth: 3, borderColor: "transparent" }}>
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
                    width: 110
                  }}
                >
                  ******
                </DefaultText>
              ) : (
                <DefaultText
                  style={{ fontSize: 32, lineHeight: 32, fontWeight: "600", width: 110 }}
                >
                  {Number(formatUnits(currency.balance, currency.decimals)).toFixed(currency.decimals < 6 ? currency.decimals : 4)}
                </DefaultText>
              )}
              <CryptoDropdown
                onPress={() =>
                  setKeyValue("modalComponent", {
                    screen: ModalScreen.Crypto,
                    values: {type: "currency"},
                  })
                }
                text={currency.symbol}
                logo={<CoinLogo image={currency.logo} symbol={currency.symbol} />}
              />
            </DefaultView>
            {hideBalance ? (
              <DefaultText style={{ color: "#9DF190", marginLeft: 72 }}>
                *******
              </DefaultText>
            ) : (
              <DefaultText style={{ color: "#9DF190", marginLeft: 36 }}>
                ~ {(Number(formatUnits(currency.balance, currency.decimals))*Number(currency.price)).toFixed(2)} USD
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
                {formatAddress(address)}
              </DefaultText>

              {copied ? (
                <CircleChecked />
              ) : (
                <Copy
                  onPress={() =>
                    copyToClipboard(address)
                  }
                />
              )}
            </DefaultView>
          </DefaultView>

          {/* Tabs */}
          <Tab.Navigator
            screenOptions={{
              lazy: true,
              tabBarPressOpacity: 1,
              tabBarActiveTintColor: "#fff",
              tabBarInactiveTintColor: "#868693",
              tabBarContentContainerStyle: {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginTop: Platform.OS === "android" ? 10 : 20,
                borderBottomColor: "#868693",
                borderBottomWidth: 0.19,
              },
              tabBarLabelStyle: {
                fontWeight: "500",
                fontSize: 16,
                textTransform: "capitalize",
              },
              tabBarIndicatorStyle: { backgroundColor: "#4A41C7", height: 3 },
              tabBarStyle: {
                backgroundColor: guide.mainBackground,
                borderBottomWidth: 0.19,
                borderBottomColor: "#868693",
              },
            }}
            sceneContainerStyle={{
              backgroundColor: guide.mainBackground,
              marginTop: Platform.OS === "android" ? -5 : 0,
            }}
            keyboardDismissMode="on-drag"
          >
            <Tab.Screen name="Send" component={Send} />
            <Tab.Screen name="Swap" component={Swap} />
          </Tab.Navigator>

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
