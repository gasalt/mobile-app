import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles";
import { useRoute } from "@react-navigation/native";
import { usePathname } from "expo-router";
import { ReactNode } from "react";

export default function TabScreen({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const route = useRoute();
  const routeName = route.name === "index" ? "/" : `/${route.name}`;
  const isCurrentRoute = pathname === routeName;

  return (
    <SafeAreaView style={styles.tabScreen}>
      {children}
    </SafeAreaView>
  );
}
