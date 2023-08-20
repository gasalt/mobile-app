import { SplashScreen, Stack } from "expo-router"
import { useEffect } from "react";

export const unstable_settings = {
    initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function GasaltLayout() {

    useEffect(() => {
        SplashScreen.hideAsync();
    }, []);

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )
}
