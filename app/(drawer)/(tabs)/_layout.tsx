import { Tabs } from "expo-router/tabs";
import { Platform, Pressable, Text, View } from "react-native";
import { DefaultText } from "../../../components/Defaults";
import styles from "../../../styles";
import Icon from "../../../components/Icon";
import Avatar from "../../../components/Avatar";
import Polygon from "../../../assets/svgs/Polygon";
import Dropdown from "../../../assets/svgs/Dropdown";
import CryptoDropdown from "../../../components/CryptoDrown";

const Label = ({ name, focused }: { name: string; focused: boolean }) => (
  <DefaultText style={{ color: focused ? "white" : "gray", fontSize: 10 }}>
    {name}
  </DefaultText>
);

export default function Main() {
  const marginBottom =
    Platform.OS === "ios" ? 40 : styles.tabBarStyle.marginBottom;
  return (
    <Tabs
      screenOptions={{
        headerTitle: "",
        headerTransparent: true,
        headerLeft: () => <Avatar />,
        tabBarStyle: [styles.tabBarStyle, { marginBottom }],
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
           <CryptoDropdown onPress={() => alert("Polygon")} text="Polygon" />
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
