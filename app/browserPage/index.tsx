import Close from "@/assets/svgs/Close";
import Lock from "@/assets/svgs/Lock";
import Polygon from "@/assets/svgs/Polygon";
import CryptoDropdown from "@/components/CryptoDrown";
import { DefaultText, DefaultView } from "@/components/Defaults";
import SwipeModal from "@/components/SwipeModal";
import { useGlobalState } from "@/sdk/state";
import { ModalScreen } from "@/types/enums";
import { useLocalSearchParams, useNavigation } from "expo-router";
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
  const [initialised, setInitialised] = useState(false);

  const webViewRef = useRef<WebView>(null);

  const onPress = () => {
    setKeyValue("modalComponent", { screen: ModalScreen.Crypto, values: {} });
  };
  const { url, name } = useLocalSearchParams();

  const navigation = useNavigation();

  useEffect(() => {
    if (!initialised || Platform.OS !== "android") return;
    if (visibility === "visible") {
      setTimeout(async () => {
        await NavigationBar.setVisibilityAsync("hidden");
      }, 3000)
    }
  }, [visibility]);

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android") {
        await NavigationBar.setBackgroundColorAsync("#0D0C27");
        await NavigationBar.setVisibilityAsync("hidden");
        setInitialised(true);
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
    } catch (e) { }

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
      } else if (dataPayload.type === "ethereum") {
        const { method, params, id } = dataPayload.data;
        // console.log("from ethereum")
        // console.log(dataPayload.data)
        if(method === "eth_sendTransaction") {
          console.log("gaslessExecute")
          const {to, value, data, gas, from} = params[0];
          const tokenFee = (16*10**18).toString();
          gasalt.gaslessExecute(to, 0, tokenFee, "0", to, data, {from}).then(res => {
            console.log("gasless executed")
            webviewRef.current.injectJavaScript(`window.ethereum.resolve(${id}, ${JSON.stringify(res)})`)
          })
          return
        }
        provider.send(method, params).then((res) => {
          console.log("provider responded!", id)
          webviewRef.current.injectJavaScript(`window.ethereum.resolve(${id}, ${JSON.stringify(res)})`)
          console.log("done!!")
        })
      } else {
        console.log(dataPayload)

      }
    }
  };

  const handleShare = async () => {
    webViewRef?.current?.injectJavaScript(`window.shareURL();`);
  };

  return (
    <TabScreen style={{ alignItems: "stretch" }}>
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
