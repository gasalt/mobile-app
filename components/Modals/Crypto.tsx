import { FlatList, Pressable, StyleSheet } from "react-native";
import { DefaultText, DefaultView } from "../Defaults";
import FloatingTextInput from "../inputs/FloatingInput";
import { cryptoData } from "../../utils/data";
import CircleChecked from "../../assets/svgs/CircleChecked";
import { useState } from "react";

export default function Crypto() {
  const [selected, setSelected] = useState<number | undefined>();
  const [search, setSearch] = useState("");

  const renderItem = ({ item }: { [key: string]: any }) => (
    <Pressable style={styles.btn} onPress={() => setSelected(item.id)}>
      <DefaultView
        style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
      >
        {item.logo}
        <DefaultText style={{ color: "#A69FFF", fontSize: 16 }}>
          {item.name}
        </DefaultText>
      </DefaultView>
      {item.id === selected && <CircleChecked />}
    </Pressable>
  );
  return (
    <DefaultView style={styles.container}>
      <FloatingTextInput
        label=""
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Search"
      />

      <FlatList
        data={cryptoData}
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
