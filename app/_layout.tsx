import { SplashScreen, Stack, } from "expo-router";
import { useEffect } from "react";

// export const unstable_settings = {
//   initialRouteName: "onboarding",
// };

SplashScreen.preventAutoHideAsync();

export default function GasaltLayout() {

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
      <Stack.Screen name="(public)/onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="(public)/login" options={{ headerShown: false }} />
      <Stack.Screen name="(public)/sendCode" options={{ headerShown: false }} />
      <Stack.Screen name="(public)/loginCode" options={{ headerShown: false }} />
      <Stack.Screen name="(public)/setDomain" options={{ headerShown: false }} />
      <Stack.Screen name="(public)/domainSet" options={{ headerShown: false }} />
      <Stack.Screen name="(public)/transactionPin" options={{ headerShown: false }} />
      <Stack.Screen name="(public)/congratulations" options={{ headerShown: false }} />

     {/* Authenticated routes */}
     <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
}

//https://stackoverflow.com/questions/56729621/change-navigation-bar-on-android-with-rn-with-expo
