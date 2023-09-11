import {
  ButtonProps,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { DefaultText } from "@/components/Defaults";

interface CustomButtonProps extends PressableProps {
  label: string;
  variant: "primary" | "cancel";
  btnStyle?: StyleProp<ViewStyle>;
}

export default function CustomButton({
  label,
  onPress,
  variant = "primary",
  btnStyle,
}: CustomButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        btnStyle,
        variant === "cancel" && styles.cancelButton,
      ]}
    >
      <DefaultText style={styles.text}>{label}</DefaultText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4A41C7",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 24,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  cancelButton: {
    backgroundColor: "#262633",
  },
});
