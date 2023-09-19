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
  }

  return (
    <TabScreen style={{ alignItems: "stretch" }}>
      <DefaultView style={styles.container}>
        <DefaultView style={styles.top}>
          <Pressable onPress={() => navigation.goBack()}>
            <Back />
          </Pressable>
        </DefaultView>
        <DefaultText style={styles.title}>Login Code</DefaultText>
        <DefaultText
          style={{
            color: "#8987AB",
            fontSize: 16,
            marginBottom: 30,
            marginTop: 5,
          }}
        >
          Enter the code sent to your email
        </DefaultText>

        <OTPInput
          value={value}
          disabled={false}
          onChange={getValue}
        />

        <DefaultView style={styles.inputContainer}>
          <CustomButton
            label="Login"
            onPress={() => router.push("/setDomain")}
            variant="primary"
          />
        </DefaultView>
        <DefaultView style={styles.resend}>
          <DefaultText style={styles.didNotGet}>Didn’t get code? </DefaultText>
          <Pressable>
            <DefaultText style={styles.resendText}>Resend</DefaultText>
          </Pressable>
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
  },
  resend: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "center",
  },
  didNotGet: {
    fontSize: 16,
  },
  resendText: {
    fontSize: 16,
    color: "#675FD0",
  },
});
