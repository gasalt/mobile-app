import { SplashScreen, Stack } from "expo-router"
import { useEffect } from "react";
// import * as NavigationBar from 'expo-navigation-bar';


export const unstable_settings = {
    initialRouteName: '(drawer)',
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
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
    )
}

//https://stackoverflow.com/questions/56729621/change-navigation-bar-on-android-with-rn-with-expo
