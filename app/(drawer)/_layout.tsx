import { Drawer } from "expo-router/drawer";
import styles, { guide } from "@/styles";
import BackButton from "@/components/BackButton";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        swipeEdgeWidth: 0,
        drawerStyle: {
          backgroundColor: styles.tabScreen.backgroundColor,
        },
        drawerLabelStyle: {
          color: "white",
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          title: "Wallet",
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Profile",
          title: "Profile",
          headerTintColor: "#fff",
          headerLeft: () => <BackButton />,
          headerStyle: {
            backgroundColor: guide.mainBackground,
            shadowColor: "transparent",
            elevation: 0,
          },
          sceneContainerStyle: {
            backgroundColor: guide.mainBackground,
          },
          headerShadowVisible: false,
        }}
      />

      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          headerTintColor: "#fff",
          headerLeft: () => <BackButton />,
          headerStyle: {
            backgroundColor: guide.mainBackground,
            shadowColor: "transparent",
            elevation: 0,
          },
          sceneContainerStyle: {
            backgroundColor: guide.mainBackground,
          },
          headerShadowVisible: false,
        }}
      />
    </Drawer>
  );
}
