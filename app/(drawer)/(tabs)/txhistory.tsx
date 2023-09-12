import { Platform, StyleSheet } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { DefaultText, DefaultView } from "@/components/Defaults";
import { guide } from "@/styles";
import All from "@/components/transactions/All";

const Tab = createMaterialTopTabNavigator();

const TabPage2 = () => {
  return (
    <DefaultView style={{ alignItems: "center", justifyContent: "center" }}>
      <DefaultText>Top 2</DefaultText>
    </DefaultView>
  );
};

function MyTabs() {
  return (
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
          marginTop: Platform.OS === "android" ? 60 : 100,
          borderBottomColor: "#868693",
          borderBottomWidth: 0.19,
        },
        tabBarLabelStyle: {
          fontWeight: "500",
          fontSize: 16,
          textTransform: "capitalize",
        },
        tabBarIndicatorStyle: { backgroundColor: "#4A41C7", height: 3 },
        tabBarStyle: { backgroundColor: guide.mainBackground },
      }}
      sceneContainerStyle={{
        backgroundColor: guide.mainBackground,
        marginTop: Platform.OS === "android" ? 0.5 : 0,
      }}
    >
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Sent" component={TabPage2} />
      <Tab.Screen name="Received" component={TabPage2} />
    </Tab.Navigator>
  );
}

export default function App() {
  return <MyTabs />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
