import Back from "@/assets/svgs/Back";
import { useNavigation } from "expo-router";
import { Image, Pressable, View } from "react-native";

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <View style={{ marginHorizontal: 20 }}>
         <Pressable onPress={() => navigation.goBack()}>
              <Back />
            </Pressable>
    </View>
  );
}