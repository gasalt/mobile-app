import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export const unstable_settings = {
  initialRouteName: "onboarding",
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
    <Stack>
      {/* Public routes */}
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="sendCode" options={{ headerShown: false }} />
      <Stack.Screen name="loginCode" options={{ headerShown: false }} />
      <Stack.Screen name="setDomain" options={{ headerShown: false }} />
      <Stack.Screen name="domainSet" options={{ headerShown: false }} />
      <Stack.Screen name="transactionPin" options={{ headerShown: false }} />
      <Stack.Screen name="congratulations" options={{ headerShown: false }} />

     {/* Authenticated routes */}
     <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
}

//https://stackoverflow.com/questions/56729621/change-navigation-bar-on-android-with-rn-with-expo
