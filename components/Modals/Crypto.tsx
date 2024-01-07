import { FlatList, Pressable, StyleSheet } from "react-native";
import { DefaultText, DefaultView } from "../Defaults";
import FloatingTextInput from "@/components/inputs/FloatingInput";
import { cryptoData } from "@/utils/data";
import CircleChecked from "@/assets/svgs/CircleChecked";
import { useState } from "react";
import { useGlobalState } from "@/sdk/state";
import { ModalScreen } from "@/types/enums";

export default function Crypto() {
  const {selectedNetwork, setKeyValue} = useGlobalState();
  const [search, setSearch] = useState("");

  const renderItem = ({ item }: { [key: string]: any }) => (
    <Pressable style={[styles.btn, {opacity: item.active ? 1 : 0.5}]} onPress={() => {
      if(item.active){
        setKeyValue("selectedNetwork", item.id)
        setKeyValue("modalComponent", { screen: ModalScreen.None, values: {} });
      }
    }}>
      <DefaultView
        style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
      >
        {item.logo()}
        <DefaultText style={{ color: "#A69FFF", fontSize: 16 }}>
          {item.name}
        </DefaultText>
      </DefaultView>
      {item.id === selectedNetwork && <CircleChecked />}
    </Pressable>
  );
  return (
    <DefaultView style={styles.container}>
      <FloatingTextInput
        label=""
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Search"
        inputStyle={{marginHorizontal: 8}}
      />

      <FlatList
        data={search ? cryptoData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())) : cryptoData}
        contentContainerStyle={{ paddingHorizontal: 10, marginTop: 10 }}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
      />
    </DefaultView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 18, marginTop: 20 },
  btn: {
    flexDirection: "row",
    backgroundColor: "#191832",
    padding: 16,
    marginVertical: 6,
    borderRadius: 8,
    borderColor: "#47475F",
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
