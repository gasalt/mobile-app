import Close from "@/assets/svgs/Close";
import Lock from "@/assets/svgs/Lock";
import Polygon from "@/assets/svgs/Polygon";
import CryptoDropdown from "@/components/CryptoDrown";
import { DefaultText, DefaultView } from "@/components/Defaults";
import SwipeModal from "@/components/SwipeModal";
import { useGlobalState } from "@/sdk/state";
import { guide } from "@/styles";
import { ModalScreen } from "@/types/enums";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { Platform, Pressable, StyleSheet, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import ss from "@/styles";
import TabScreen from "@/components/TabScreen";


export default function BrowserPage() {
  const { setKeyValue } = useGlobalState();
  const { width } = useWindowDimensions();
  const onPress = () => {
    setKeyValue("modalComponent", { screen: ModalScreen.Crypto, values: {} });
  };
  const { url, name } = useLocalSearchParams();

  const navigation = useNavigation();
  return (
    <TabScreen style={{ alignItems: "stretch" }}>
      <DefaultView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

          marginTop: 32,
          // height: 50,
          top: 0,
          left: 0,
          // position:"absolute",
          width: "100%",
          zIndex: 100,
          // marginBottom: 10,
          paddingHorizontal: 16,
        }}
      >
        <DefaultView
          style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
        >
          <Pressable
            hitSlop={{ top: 300, left: 100, bottom: 100, right: 100 }}
            onPress={() => navigation?.goBack()}
          >
            <Close />
          </Pressable>
          <DefaultView
            style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
          >
            <Lock />
            <DefaultText>{name}</DefaultText>
          </DefaultView>
        </DefaultView>

        <CryptoDropdown onPress={onPress} text="Polygon" logo={<Polygon />} />
      </DefaultView>
      <WebView
        // style={{marginTop: 70}}
        source={{ uri: url as string }}
        allowFileAccess
        scalesPageToFit
        originWhitelist={["*"]}
        setSupportMultipleWindows={false}
      />
      <SwipeModal />
    </TabScreen>
  );
}
