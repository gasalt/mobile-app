import { SafeAreaView } from "react-native-safe-area-context";
import styles from "@/styles";
// import { useRoute } from "@react-navigation/native";
// import { usePathname } from "expo-router";
import { ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleProp, ViewStyle } from "react-native";
// import SwipeModal from "./SwipeModal";

export default function TabScreen({ children, style }: { children: ReactNode, style?: StyleProp<ViewStyle> }) {
  // const pathname = usePathname(); // This is the current route on display
  
  // const route = useRoute();

  // let routeName = route.name;
  // if (routeName === "index" || routeName === "browserPage/index"){
  //   routeName = "/";
  // }
  
  // // const routeName = route.name === "index" ? "/" : `/${route.name}`;
  // const isCurrentRoute = pathname === routeName;
  // console.log(pathname, route.name, routeName, isCurrentRoute);

  return (
    <SafeAreaView style={[styles.tabScreen, style]}>
      <StatusBar
        translucent={false}
        style={"light"}
        backgroundColor={styles.tabScreen.backgroundColor}
      />
      {children}
      {/* {isCurrentRoute && <SwipeModal />} */}
    </SafeAreaView>
  );
}
