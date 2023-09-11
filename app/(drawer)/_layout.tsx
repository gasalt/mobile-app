import { Drawer} from "expo-router/drawer";
import styles from "@/styles";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        swipeEdgeWidth: 0,
        drawerStyle: {
          backgroundColor: styles.tabScreen.backgroundColor,
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
        }}
      />

      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
        }}
      />
    </Drawer>
  );
}
