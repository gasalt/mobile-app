import { SplashScreen, Stack, } from "expo-router";
import { useEffect } from "react";
import * as SystemUI from 'expo-system-ui';

export const unstable_settings = {
  initialRouteName: "(public)/onboarding",
};

SplashScreen.preventAutoHideAsync();

SystemUI.setBackgroundColorAsync("#0D0C27");

export default function GasaltLayout() {

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
  
  return (
    <Stack screenOptions={{headerShown: false}}>
      {/* Public routes */}
      <Stack.Screen name="(public)/onboarding"/>
      <Stack.Screen name="(public)/login"/>
      <Stack.Screen name="(public)/sendCode"/>
      <Stack.Screen name="(public)/loginCode"/>
      <Stack.Screen name="(public)/setDomain"/>
      <Stack.Screen name="(public)/domainSet"/>
      <Stack.Screen name="(public)/transactionPin"/>
      <Stack.Screen name="(public)/congratulations"/>

     {/* Authenticated routes */}
     <Stack.Screen name="(drawer)"/>
    </Stack>
  );
}

//https://stackoverflow.com/questions/56729621/change-navigation-bar-on-android-with-rn-with-expo
