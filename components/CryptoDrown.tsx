import { Pressable } from "react-native";
import styles from "../styles";
import Polygon from "../assets/svgs/Polygon";
import { DefaultText } from "./Defaults";
import Dropdown from "../assets/svgs/Dropdown";

interface CryptoDropdownProps {
  onPress: () => void;
  text: string;
}
export default function CryptoDropdown({ onPress, text }: CryptoDropdownProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: styles.tabScreen.backgroundColor,
        marginHorizontal: 20,
        borderColor: "#A69FFF",
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Polygon />
      <DefaultText style={{ color: "#A69FFF", fontSize: 14, lineHeight: 24 }}>
        {text}
      </DefaultText>
      <Dropdown />
    </Pressable>
  );
}
