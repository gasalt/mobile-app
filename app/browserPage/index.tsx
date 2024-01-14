import "react-native-url-polyfill/auto"
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
import { gstTokenAddress } from "@/utils/constants";



export default function BrowserPage() {
  const { setKeyValue, gsnProvider, address, gasalt, masterAddress, gsnSigner, masterSigner } = useGlobalState();
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
    } catch (e) {
      console.log("error parsing payload", e);
      return;
     }

    if (dataPayload) {
      if (dataPayload.type === "Console" && dataPayload.data.type === "print") {
        // console.info(`[Console] ${JSON.stringify(dataPayload.data)}`);
      } else if (dataPayload.type === "Share") {
        if (dataPayload.data?.currentURL) {
          Share.share({
            message: dataPayload.data.currentURL,
            title: "Shared link from Gasalt Wallet",
          });
        }
      } else if (dataPayload.type === "ethereum") {
        const { method, params, id } = dataPayload.data;
        if (method === "eth_requestAccounts" || method === "eth_accounts") {
          const res = [address]
          webViewRef?.current?.injectJavaScript(`window.ethereum.resolveQuery(${id}, ${JSON.stringify(res)})`)
          return;
        }
        // console.log("from ethereum")
        // console.log(dataPayload.data)
        if(method === "eth_sendTransaction") {
          console.log("gaslessExecute")
          console.log(params)
          const {to, value=0, data, gas, from} = params[0];
          const tokenFee = (0.5*10**18).toString();

          gasalt.gaslessExecute(gstTokenAddress, 0, tokenFee, value, to, data, {from: masterAddress}).then((res: any) => {
            console.log("gasless executed", {res})
            webViewRef?.current?.injectJavaScript(`window.ethereum.resolveQuery(${id}, ${JSON.stringify(res)})`)
          })
          return
        }
        if( method === "eth_signTypedData_v4") {
          const {types: _types, domain, message} = JSON.parse(params[1]);
          const {EIP712Domain, ...types} = _types;
          console.log({types})
          masterSigner.signTypedData(domain, types, message).then((res: any) => {
            console.log("signTypedData_v4", {res})
            webViewRef?.current?.injectJavaScript(`window.ethereum.resolveQuery(${id}, ${JSON.stringify([res])})`)
          }).catch(e => {
            console.log("error signing typed data", e)
            webViewRef?.current?.injectJavaScript(`window.ethereum.resolveQuery(${id}, ${JSON.stringify(["0x0"])})`)
          })
          return
        }
        gsnProvider.send(method, params).then((res) => {
          console.log("provider responded!", method, id, res)
          webViewRef?.current?.injectJavaScript(`window.ethereum.resolveQuery(${id}, ${JSON.stringify(res)})`)
        }).catch((e:any) => {
          console.log("error sending", method, id, e)
          webViewRef?.current?.injectJavaScript(`window.ethereum.rejectQuery(${id}, ${JSON.stringify(["0x0"])})`)
        })
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
