import { DefaultView } from "@/components/Defaults"
import { useGlobalState } from "@/sdk/state";
import { Redirect } from "expo-router";

// Entry point of the app. The session determines what should show
function Index() {
    const { session } = useGlobalState();

  if(session.loggedInBefore) {
    return <Redirect href={"/(public)/login"} />;
  }

  if(session.isFirstTimeUser) {
    return <Redirect href={"/(public)/onboarding"} />;
  }

}

export default Index
