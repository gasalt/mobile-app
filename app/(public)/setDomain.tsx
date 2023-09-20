import { Pressable, StyleSheet, Text } from "react-native";
import Back from "@/assets/svgs/Back";
import TabScreen from "@/components/TabScreen";
import { useNavigation, useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { DefaultText, DefaultView } from "@/components/Defaults";
import { useState } from "react";
import FloatingTextInput from "@/components/inputs/FloatingInput";

export default function SetDomain() {
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
        <DefaultText style={styles.title}>Set domain name</DefaultText>
        <DefaultText
          style={{
            color: "#8987AB",
            fontSize: 16,
            marginBottom: 10,
            marginTop: 5,
          }}
        >
          Set a free ethereum domain for your address
        </DefaultText>

        <FloatingTextInput
          label="Name"
          value={value}
          onChangeText={(text) => setValue(text)}
          rightElement={
            <DefaultText style={{ color: "#403E59" }}>.gasalt.eth</DefaultText>
          }
        />

        <DefaultView style={styles.inputContainer}>
          <CustomButton
            label="Set name"
            onPress={() => router.push("/domainSet")}
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
  title: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 24,
  },

  inputContainer: {
    gap: 24,
    marginTop: 20,
  },
});
