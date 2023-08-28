import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import styles_ from "../styles";
import { DefaultText } from "./Defaults";
import Dropdown from "../assets/svgs/Dropdown";
import { ReactNode } from "react";

interface CryptoDropdownProps {
  onPress: () => void;
  text: string;
  textStyle?: StyleProp<TextStyle>;
  btnStyle?: StyleProp<ViewStyle>;
  showLogo?: boolean;
  logo: ReactNode;
}
export default function CryptoDropdown({
  onPress,
  text,
  textStyle,
  btnStyle,
  showLogo = true,
  logo,
}: CryptoDropdownProps) {
  return (
    <Pressable onPress={onPress} style={[styles.btn, btnStyle]}>
      {showLogo && logo}
      <DefaultText style={[styles.text, textStyle]}>{text}</DefaultText>
      <Dropdown />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: styles_.tabScreen.backgroundColor,
    marginHorizontal: 20,
    borderColor: "#A69FFF",
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  text: { color: "#A69FFF", fontSize: 14, lineHeight: 24 },
});
