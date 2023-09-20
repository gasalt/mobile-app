import { Pressable, StyleSheet, Text } from "react-native";
import Back from "@/assets/svgs/Back";
import TabScreen from "@/components/TabScreen";
import { useNavigation, useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { DefaultText, DefaultView } from "@/components/Defaults";
import OTPInput from "@/components/inputs/OTPInput";
import { useState } from "react";

export default function LoginCode() {
  const navigation = useNavigation();

  const router = useRouter();
  const [value, setValue] = useState<Array<string>>([]);

  const getValue = (val: string[]) => {
    setValue(val);
  };

  return (
    <TabScreen style={{ alignItems: "stretch" }}>
      <DefaultView style={styles.container}>
        <DefaultView style={styles.top}>
          <Pressable onPress={() => navigation.goBack()}>
            <Back />
          </Pressable>
        </DefaultView>
        <DefaultText style={styles.title}>Set transaction pin</DefaultText>

        <OTPInput value={value} disabled={false} onChange={getValue} />

        <DefaultView style={styles.inputContainer}>
          <CustomButton
            label="Set transaction pin"
            onPress={() => router.push("/congratulations")}
            variant="primary"
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
    marginBottom: 20,
  },

  inputContainer: {
    gap: 24,
  },
});
