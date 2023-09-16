import { SafeAreaView } from "react-native-safe-area-context";
import styles from "@/styles";
import { useRoute } from "@react-navigation/native";
import { usePathname } from "expo-router";
import { ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleProp, ViewStyle } from "react-native";

export default function TabScreen({ children, style }: { children: ReactNode, style?: StyleProp<ViewStyle> }) {
  const pathname = usePathname();
  
  const route = useRoute();
  console.log(pathname, route.name);
  // const routeName = route.name === "index" ? "/" : `/${route.name}`;
  // const isCurrentRoute = pathname === routeName;

  return (
    <SafeAreaView style={[styles.tabScreen, style]}>
      <StatusBar
        translucent={false}
        style={"light"}
        backgroundColor={styles.tabScreen.backgroundColor}
      />
      {children}
    </SafeAreaView>
  );
}
