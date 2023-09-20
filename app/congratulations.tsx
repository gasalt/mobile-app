import { Pressable, StyleSheet, Text } from "react-native";
import Back from "@/assets/svgs/Back";
import TabScreen from "@/components/TabScreen";
import { useNavigation, useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { DefaultText, DefaultView } from "@/components/Defaults";
import Congrats from "@/assets/svgs/Congrats";
import { useGlobalState } from "@/sdk/state";

export default function Congratulations() {
  const navigation = useNavigation();
  const router = useRouter();

  const { setKeyValue } = useGlobalState();

  return (
    <TabScreen style={{ alignItems: "stretch" }}>
      <DefaultView style={styles.container}>
        <DefaultView style={styles.top}>
          <Pressable onPress={() => navigation.goBack()}>
            <Back />
          </Pressable>
        </DefaultView>

        <DefaultView
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 70,
          }}
        >
          <Congrats />
          <DefaultText
            style={{ fontSize: 24, fontWeight: "500", marginVertical: 20 }}
          >
            Congratulations
          </DefaultText>
          <DefaultText
            style={{
              color: "#8987AB",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            You have earned 10points and will earn free GST tokens in our
            airdrop. Perform more tasks to earn more tokens
          </DefaultText>
        </DefaultView>

        <DefaultView style={styles.inputContainer}>
          <CustomButton
            label="Share for more points"
            onPress={() => {
              // set the session. TODO: this will be refactored
              setKeyValue("session", {
                isFirstTimeUser: false,
                loggedInBefore: false,
                currentlyLoggedIn: true
              })

              // route to the tabs layout
              router.push("/")
            }
              
            }
            variant="primary"
          />

          <CustomButton
            label="Skip"
            onPress={() => {
              router.replace("/wallet")
            }}
            variant="cancel"
          />
        </DefaultView>
      </DefaultView>
    </TabScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  top: {
    marginVertical: 20,
  },

  inputContainer: {
    gap: 24,
    marginTop: 20,
  },
});
