import { ButtonProps, Pressable, PressableProps, StyleSheet } from "react-native";
import { DefaultText } from "./Defaults";


interface CustomButtonProps extends PressableProps {
    label: string;
    variant: "primary" | "cancel"
}

export default function CustomButton({label, onPress, variant = "primary"}: CustomButtonProps){
  return (
    <Pressable onPress={onPress} style={[styles.button, variant === "cancel" && styles.cancelButton]}>
        <DefaultText>{label}</DefaultText>
    </Pressable>
  )
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
    cancelButton: {
        backgroundColor: "#262633",

    }
})