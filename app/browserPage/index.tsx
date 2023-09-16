import Close from "@/assets/svgs/Close";
import Lock from "@/assets/svgs/Lock";
import Polygon from "@/assets/svgs/Polygon";
import CryptoDropdown from "@/components/CryptoDrown";
import { DefaultText, DefaultView } from "@/components/Defaults";
import SwipeModal from "@/components/SwipeModal";
import { useGlobalState } from "@/sdk/state";
import { ModalScreen } from "@/types/enums";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { Platform, Pressable } from "react-native";
import WebView from "react-native-webview";
import TabScreen from "@/components/TabScreen";


export default function BrowserPage() {
  const { setKeyValue } = useGlobalState();
  const onPress = () => {
    setKeyValue("modalComponent", { screen: ModalScreen.Crypto, values: {} });
  };
  const { url, name } = useLocalSearchParams();

  const navigation = useNavigation();
  return (
    <TabScreen style={{ alignItems: "stretch" }}>
    <Stack.Screen options={{headerShown: false}} />
      <DefaultView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          top: 0,
          left: 0,
          width: "100%",
          marginBottom: 10,
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
        source={{ uri: url as string }}
        allowFileAccess
        scalesPageToFit
        originWhitelist={["*"]}
        setSupportMultipleWindows={false}
      />
      {Platform.OS === "ios" && <SwipeModal />}
    </TabScreen>
  );
}
