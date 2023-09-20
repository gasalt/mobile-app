import { useGlobalState } from "@/sdk/state";
import { Redirect, Slot } from "expo-router";

// Entry point of the app. The session determines what should show
function Index() {
    const { session } = useGlobalState();

    if (session.loggedInBefore) {
        return <Redirect href={"/(public)/login"} />;
    }

    if (session.isFirstTimeUser) {
        return <Redirect href={"/(public)/onboarding"} />;
    }

    // Redirecting to tabs causes infinite error. Need to find a solution for this.
    if (session.currentlyLoggedIn) {
        return <Redirect href={"/(drawer)/(tabs)/wallet"} />;
    }
    return <Slot />
}

export default Index
