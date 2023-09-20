import { Pressable, StyleSheet, Text } from "react-native";
import Back from "@/assets/svgs/Back";
import TabScreen from "@/components/TabScreen";
import { useNavigation, useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { DefaultText, DefaultView } from "@/components/Defaults";
import { useState } from "react";
import DoneCircle from "@/assets/svgs/DoneCircle";

export default function DomainSet() {
  const navigation = useNavigation();

  const router = useRouter();
  const [value, setValue] = useState("");

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
          <DoneCircle />
          <DefaultText
            style={{ fontSize: 24, fontWeight: "500", marginVertical: 20 }}
          >
            Your name has been set
          </DefaultText>
          <DefaultText
            style={{
              color: "#8987AB",
              fontStyle: "italic",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Deposit a token to azeez.gasalt.eth, transfer or swap and get a free
            transfer/swap
          </DefaultText>
        </DefaultView>

        <DefaultView style={styles.inputContainer}>
          <CustomButton
            label="Deposit now"
            onPress={() => router.push("/transactionPin")}
            variant="primary"
          />

          <CustomButton
            label="Skip"
            onPress={() => router.push("/sendCode")}
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
