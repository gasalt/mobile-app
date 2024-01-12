import { FlatList, Pressable, StyleSheet } from "react-native";
import { DefaultText, DefaultView } from "../Defaults";
import FloatingTextInput from "@/components/inputs/FloatingInput";
import { cryptoData } from "@/utils/data";
import CircleChecked from "@/assets/svgs/CircleChecked";
import { useState, useMemo } from "react";
import { useGlobalState } from "@/sdk/state";

type TItem = { [key: string]: any }

export default function Crypto({ values }: { values: any }) {
  const [search, setSearch] = useState("");
  const { setKeyValue, selectedToken, selectedNetwork, selectedFee } = useGlobalState();

  const selectOptions = {
    'selected-network': "selectedNetwork",
    'selected-token': "selectedToken",
    'selected-fee': "selectedFee",
  } as any;

  const selectionOption = useMemo(() => selectOptions[values.name], []);
  const selectedItem = selectionOption === 'selectedNetwork' ? selectedNetwork : selectionOption === 'selectedToken' ? selectedToken : selectedFee;

  const handlePress = (item: TItem) => {
    setKeyValue(selectionOption, item);
  }

  const renderItem = ({ item }: TItem) => (
    <Pressable disabled={item.id > 2} style={item.id > 2 ? styles.disabledBtn : styles.btn} onPress={() => handlePress(item)}>
      <DefaultView
        style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
      >
        {item.logo}
        <DefaultText style={{ color: "#A69FFF", fontSize: 16 }}>
          {item.name}
        </DefaultText>
      </DefaultView>
      {item.id === selectedItem.id && <CircleChecked />}
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
  disabledBtn: {
    flexDirection: "row",
    opacity: 0.4,
    padding: 16,
    marginVertical: 6,
    borderRadius: 8,
    borderColor: "#47475F",
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
  }
});
