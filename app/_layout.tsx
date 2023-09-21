import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export const unstable_settings = {
  initialRouteName: "(public)/onboarding",
};

SplashScreen.preventAutoHideAsync();

export default function GasaltLayout() {
  // const visibility = NavigationBar.useVisibility()

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  // useEffect(() => {
  //     if (visibility) {
  //         NavigationBar.setVisibilityAsync("hidden");
  //         console.log("visible!")
  //     }
  // }, [visibility]);
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
