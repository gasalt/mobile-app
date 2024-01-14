import { useNavigation } from "expo-router";
import { Image, Pressable, View } from "react-native";

export default function Avatar() {
  const navigation = useNavigation();
  return (
    <View style={{ marginHorizontal: 20 }}>
         {/* @ts-expect-error 
      <Pressable onPress={() => navigation.openDrawer()}> */}
      <Pressable onPress={() => {}}>
        <Image
          source={require("@/assets/images/5856.jpg")}
          style={{ width: 32, height: 32, aspectRatio: 1, borderRadius: 40 }}
        />
      </Pressable>
    </View>
  );
}
