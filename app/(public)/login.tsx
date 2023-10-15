import "../../globals"
import "react-native-get-random-values"
import { Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import Back from "@/assets/svgs/Back";
import Google from "@/assets/svgs/Google";
import Apple from "@/assets/svgs/Apple";
import TabScreen from "@/components/TabScreen";
import { useNavigation } from "expo-router";
import CustomButton from "@/components/CustomButton";
import FloatingTextInput from "@/components/inputs/FloatingInput";
import { DefaultText, DefaultView } from "@/components/Defaults";
import useAuth from "@/sdk/auth";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");

  const {login} = useAuth()

  return (
    <TabScreen>
      <DefaultView style={styles.container}>
        <DefaultView style={styles.top}>
          <Pressable onPress={() => navigation.goBack()}>
            <Back />
          </Pressable>
        </DefaultView>
        <DefaultText style={styles.title}>Login</DefaultText>

        <DefaultView style={styles.inputContainer}>
          <FloatingTextInput
            label="Email"
            value={email}
            mode="email"
            onChangeText={(text) => setEmail(text)}
          />

          <CustomButton
            label="Login"
            onPress={() => login({email, authType:"email"})}
            variant="primary"
          />
        </DefaultView>

        <DefaultView style={styles.orContent}>
          <DefaultView style={styles.line} />
          <DefaultText style={styles.orText}>OR</DefaultText>
          <DefaultView style={styles.line} />
        </DefaultView>

        <DefaultView style={styles.btnContainer}>
          <Pressable style={styles.authBtn} onPress={() => login({authType:"gmail"})}>
            <Google />
            <DefaultText style={styles.authBtnText}>
              Continue with Google
            </DefaultText>
          </Pressable>
          <Pressable style={styles.authBtn} onPress={() => login({authType:"apple"})}>
            <Apple />
            <DefaultText style={styles.authBtnText}>
              Continue with Apple
            </DefaultText>
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
  btnContainer: {
    gap: 4,
  },
  authBtn: {
    borderWidth: 1,
    borderColor: "#494766",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 52,
    marginTop: 16,
  },
  authBtnText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  orContent: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 40,
  },
  line: {
    backgroundColor: "#494766",
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  orText: {
    alignSelf: "center",
    paddingHorizontal: 5,
    fontSize: 16,
    color: "#fff",
  },
  input: {
    borderColor: "#494766",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    height: 56,
  },
  inputContainer: {
    gap: 24,
  },
  button: {
    backgroundColor: "#4a41c7",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
});
