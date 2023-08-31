import { Tabs } from "expo-router/tabs";
import { Platform } from "react-native";
import { DefaultText } from "../../../components/Defaults";
import styles from "../../../styles";
import Icon from "../../../components/Icon";
import Avatar from "../../../components/Avatar";
import Polygon from "../../../assets/svgs/Polygon";
import CryptoDropdown from "../../../components/CryptoDrown";
import { DefaultState, ModalType, useGlobalState } from "../../../sdk/state";
import { useState } from "react";

const Label = ({ name, focused }: { name: string; focused: boolean }) => (
  <DefaultText style={{ color: focused ? "white" : "gray", fontSize: 10 }}>
    {name}
  </DefaultText>
);

export default function Main() {
  const { setKeyValue } = useGlobalState();
  const marginBottom =
    Platform.OS === "ios" ? 40 : styles.tabBarStyle.marginBottom;

  // set marginTop dynamically
  const [marginTop, setMarginTop] = useState<number | undefined>(undefined);

  const onPress = (
    { type, value }: { type: keyof DefaultState; value: ModalType },
    top: number | undefined
  ) => {
    setKeyValue(type, value);
    setMarginTop(top);
  };
  return (
    <Tabs
      screenOptions={{
        headerTitle: "",
        headerTransparent: true,
        headerLeft: () => <Avatar />,
        tabBarStyle: [styles.tabBarStyle, { marginBottom }],
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: "/",
          tabBarIcon: (props) => <Icon focused={props.focused} name="wallet" />,
          tabBarLabel: (props) => (
            <Label focused={props.focused} name="Wallet" />
          ),
          headerRight: () => (
            <CryptoDropdown
              onPress={() =>
                onPress({ type: "modalComponent", value: "Crypto" }, 200)
              }
              text="Polygon"
              logo={<Polygon />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="txhistory"
        options={{
          href: "/txhistory",
          tabBarIcon: (props) => (
            <Icon focused={props.focused} name="history" />
          ),
          tabBarLabel: (props) => (
            <Label focused={props.focused} name="History" />
          ),
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
