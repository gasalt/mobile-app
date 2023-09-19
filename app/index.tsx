import { DefaultView } from "@/components/Defaults"
import { useGlobalState } from "@/sdk/state";
import { Redirect } from "expo-router";

// Entry point of the app. The session determines what should show
const Index = () => {
    const {  session } = useGlobalState();

  if(session.loggedInBefore) {
    return <Redirect href={"/(public)/login"} />;
  }

  if(session.isFirstTimeUser) {
    return <Redirect href={"/(public)/onboarding"} />;
  }

  // Redirecting to tabs causes infinite error. Need to find a solution for this.
  if(session.currentlyLoggedIn) {
    return <Redirect href={"/"} />;
  }
  return <DefaultView></DefaultView>
  
}

export default Index
