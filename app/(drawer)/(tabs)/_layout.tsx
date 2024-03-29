import { Tabs } from "expo-router/tabs";
import {  Platform } from "react-native";
import { DefaultText } from "@/components/Defaults";
import styles from "@/styles";
import Icon from "@/components/Icon";
import Avatar from "@/components/Avatar";
import CryptoDropdown from "@/components/CryptoDrown";
import { useGlobalState } from "@/sdk/state";
import { ModalScreen } from "@/types/enums";
import { cryptoData } from "@/utils/data";


export const unstable_settings = {
  initialRouteName: "/wallet",
};

const Label = ({ name, focused }: { name: string; focused: boolean }) => (
  <DefaultText style={{ color: focused ? "white" : "gray", fontSize: 10 }}>
    {name}
  </DefaultText>
);

export default function Main() {
  const { setKeyValue, selectedNetwork } = useGlobalState();
  const network = cryptoData.find((item) => item.id === selectedNetwork)!;
  const marginBottom =
    Platform.OS === "ios" ? 40 : styles.tabBarStyle.marginBottom;

  const onPress = () => {
    setKeyValue("modalComponent", { screen: ModalScreen.Crypto, values: {type: "network"} });
  };

  const Logo = network.logo(16)

  return (
 
    <Tabs
      screenOptions={{
        headerTitle: "",
        headerShown: false,
        headerTransparent: true,
        tabBarStyle: [styles.tabBarStyle, { marginBottom }],
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="wallet"
        options={{
          headerShown: true,
          href: "/wallet",
          tabBarIcon: (props) => <Icon focused={props.focused} name="wallet" />,
          tabBarLabel: (props) => (
            <Label focused={props.focused} name="Wallet" />
          ),
          headerLeft: () => <Avatar />,
          headerRight: () => (
            <CryptoDropdown
              onPress={onPress}
              text={network.name}
              logo={Logo}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="txhistory"
        options={{
          headerShown: true,
          href: "/txhistory",
          tabBarIcon: (props) => (
            <Icon focused={props.focused} name="history" />
          ),
          tabBarLabel: (props) => (
            <Label focused={props.focused} name="History" />
          ),
          headerTitle: "Transactions",
          headerTitleStyle: {
            color: "white",
            fontSize: 16,
            fontWeight: "500",
          },
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="browser"
        options={{
          href: "/browser",
          tabBarIcon: (props) => (
            <Icon focused={props.focused} name="browser" />
          ),
          tabBarLabel: (props) => (
            <Label focused={props.focused} name="Browser" />
          ),
        }}
      />
    </Tabs>
  );
}
