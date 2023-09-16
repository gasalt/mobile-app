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
import WebView from "react-native-webview";

export default function BrowserPage() {
  const { setKeyValue } = useGlobalState();
  const {width} = useWindowDimensions();
  const onPress = () => {
    setKeyValue("modalComponent", { screen: ModalScreen.Crypto, values: {} });
  };
  const { url, name } = useLocalSearchParams();

  const navigation = useNavigation();
  return (
    <DefaultView style={styles.container}>
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <DefaultView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: Platform.OS === "ios" ? 150 : 30,
          marginBottom: 15,
          paddingHorizontal: 16,
          position: "relative",
        }}
      >
        <DefaultView
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            position: "absolute",
            marginLeft: 20,
          }}
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

        <DefaultView style={{ marginLeft: width * 0.55 }}>
          <CryptoDropdown onPress={onPress} text="Polygon" logo={<Polygon />} />
        </DefaultView>
      </DefaultView>
      <WebView
        source={{ uri: url as string }}
        allowFileAccess
        scalesPageToFit
        originWhitelist={["*"]}
      />
      <SwipeModal />
    </DefaultView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: guide.mainBackground,
    marginTop: Platform.OS === "android" ? 0 : -70,
  },
});
