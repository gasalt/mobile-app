import Close from "@/assets/svgs/Close";
import { guide } from "@/styles";
import { Stack } from "expo-router/stack";

export default function BrowserLayout() {
  return <Stack screenOptions={{headerShown: true}}/>;
}
