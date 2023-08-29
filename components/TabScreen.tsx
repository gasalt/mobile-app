import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles";
import { useRoute } from "@react-navigation/native";
import { usePathname } from "expo-router";
import { ReactNode } from "react";
import { StatusBar } from "expo-status-bar";

export default function TabScreen({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const route = useRoute();
  const routeName = route.name === "index" ? "/" : `/${route.name}`;
  const isCurrentRoute = pathname === routeName;

  return (
    <SafeAreaView style={styles.tabScreen}>
      <StatusBar
        translucent={false}
        style={"light"}
        backgroundColor={styles.tabScreen.backgroundColor}
      />
      {children}
    </SafeAreaView>
  );
}
