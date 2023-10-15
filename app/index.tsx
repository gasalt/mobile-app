import { useGlobalState } from "@/sdk/state";
import { Redirect } from "expo-router";

// Entry point of the app. The session determines what should show
function Index() {

    const { session } = useGlobalState();

    if (!session.completedOnboarding) {
        return <Redirect href={"/(public)/onboarding"} />;
    }

    if (!session.isLoggedIn) {
        return <Redirect href={"/(public)/login"} />;
    }

    <Redirect href={"/(drawer)/(tabs)/wallet"} />;
}

export default Index
