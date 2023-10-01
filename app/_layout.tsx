// import "../globals"
// import "@ethersproject/shims"
// import "react-native-get-random-values"
import { SplashScreen, Stack, } from "expo-router";
import { useEffect } from "react";
import * as SystemUI from 'expo-system-ui';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useGlobalState } from "@/sdk/state";
import * as SecureStore from "expo-secure-store";


export const unstable_settings = {
  initialRouteName: "(public)/onboarding",
};

SplashScreen.preventAutoHideAsync();

SystemUI.setBackgroundColorAsync("#0D0C27");

export default function GasaltLayout() {

  const { setKeyValue } = useGlobalState();

  useEffect(() => {
    (async () => {
      console.log(await AsyncStorage.getItem("completedOnboarding"))
      const completedOnboarding = (await AsyncStorage.getItem("completedOnboarding")) === "true"
      const isLoggedIn = (await AsyncStorage.getItem("isLoggedIn")) === "true"
      if (completedOnboarding && isLoggedIn) {
        const _gasaltAuthParam = await SecureStore.getItemAsync("gasaltAuthParam");
        const {privateKey="", email=""} = _gasaltAuthParam && JSON.parse(_gasaltAuthParam)
        privateKey && setKeyValue("privateKey", privateKey)
        email && setKeyValue("email", email)
      }
      setKeyValue("session", { completedOnboarding, isLoggedIn })
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 5000)
    })()
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Public routes */}
      <Stack.Screen name="(public)/onboarding" />
      <Stack.Screen name="(public)/login" />
      <Stack.Screen name="(public)/sendCode" />
      <Stack.Screen name="(public)/loginCode" />
      <Stack.Screen name="(public)/setDomain" />
      <Stack.Screen name="(public)/domainSet" />
      <Stack.Screen name="(public)/transactionPin" />
      <Stack.Screen name="(public)/congratulations" />

      {/* Authenticated routes */}
      <Stack.Screen name="(drawer)" />
    </Stack>
  );
}

//https://stackoverflow.com/questions/56729621/change-navigation-bar-on-android-with-rn-with-expo
