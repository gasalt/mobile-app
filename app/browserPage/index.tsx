import Close from "@/assets/svgs/Close";
import Lock from "@/assets/svgs/Lock";
import Polygon from "@/assets/svgs/Polygon";
import CryptoDropdown from "@/components/CryptoDrown";
import { DefaultText, DefaultView } from "@/components/Defaults";
import SwipeModal from "@/components/SwipeModal";
import { useGlobalState } from "@/sdk/state";
import { ModalScreen } from "@/types/enums";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { Platform, Pressable, Share } from "react-native";
import WebView from "react-native-webview";
import TabScreen from "@/components/TabScreen";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect, useRef, useState } from "react";
import { AntDesign, Ionicons, Feather, Octicons } from "@expo/vector-icons";
import runFirst from "@/utils/runjs";


export default function BrowserPage() {
  const { setKeyValue } = useGlobalState();
  const visibility = NavigationBar.useVisibility();
  const [pageLoading, setPageLoading] = useState(false);
  const [fav, setFav] = useState(false);

  const webViewRef = useRef<WebView>(null);

  const onPress = () => {
    setKeyValue("modalComponent", { screen: ModalScreen.Crypto, values: {} });
  };
  const { url, name } = useLocalSearchParams();

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android") {
        await NavigationBar.setVisibilityAsync("hidden");
        await NavigationBar.setBackgroundColorAsync("#0D0C27");
      }
    })();
    return () => {
      Platform.OS === "android" && NavigationBar.setVisibilityAsync("visible");
    };
  }, []);

  const onMessage = (payload: any) => {
    let dataPayload;
    try {
      dataPayload = JSON.parse(payload.nativeEvent.data);
    } catch (e) {}

    if (dataPayload) {
      if (dataPayload.type === "Console") {
        console.info(`[Console] ${JSON.stringify(dataPayload.data)}`);
      } else if (dataPayload.type === "Share") {
        if (dataPayload.data?.currentURL) {
          Share.share({
            message: dataPayload.data.currentURL,
            title: "Shared link from Gasalt Wallet",
          });
        }
      }
    }
  };

  const handleShare = async () => {
    webViewRef?.current?.injectJavaScript(`window.shareURL();`);
  };

  return (
    <TabScreen style={{ alignItems: "stretch" }}>
      <Stack.Screen options={{ headerShown: false }} />
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
        ref={webViewRef}
        allowFileAccess
        scalesPageToFit
        originWhitelist={["*"]}
        setSupportMultipleWindows={false}
        onLoadStart={() => {
          setPageLoading(true);
        }}
        onLoad={() => {
          setPageLoading(false);
        }}
        injectedJavaScript={`${runFirst}`}
        onMessage={onMessage}
        injectedJavaScriptBeforeContentLoaded={`true;`}
        javaScriptEnabled={true}
      />
      {Platform.OS === "ios" && <SwipeModal />}
      {visibility === "hidden" && (
        <DefaultView
          style={{
            height: 60,
            paddingHorizontal: 20,
            paddingTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Pressable
            onPress={() => {
              webViewRef.current?.goBack();
            }}
          >
            <AntDesign name="left" size={24} color="white" />
          </Pressable>
          <Pressable
            onPress={() => {
              webViewRef.current?.goForward();
            }}
          >
            <AntDesign name="right" size={24} color="white" />
          </Pressable>
          {pageLoading ? (
            <Pressable
              onPress={() => {
                webViewRef?.current?.stopLoading();
              }}
            >
              <Feather name="x" size={24} color="white" />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                webViewRef?.current?.reload();
              }}
            >
              <Ionicons name="reload-outline" size={24} color="white" />
            </Pressable>
          )}
          <Pressable
            onPress={() => {
              handleShare();
            }}
          >
            <Octicons name="share" size={24} color="white" />
          </Pressable>
          {fav ? (
            <Pressable
              onPress={() => {
                setFav(false);
              }}
            >
              <AntDesign name="star" size={24} color="white" />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setFav(true);
              }}
            >
              <AntDesign name="staro" size={24} color="white" />
            </Pressable>
          )}
        </DefaultView>
      )}
    </TabScreen>
  );
}
