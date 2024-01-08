import { FlatList, Pressable, StyleSheet } from "react-native";
import { DefaultText, DefaultView } from "../Defaults";
import FloatingTextInput from "@/components/inputs/FloatingInput";
import { cryptoData as networkData } from "@/utils/data";
import CircleChecked from "@/assets/svgs/CircleChecked";
import { useState } from "react";
import { useGlobalState } from "@/sdk/state";
import { ModalScreen } from "@/types/enums";

export default function Crypto() {
  const {selectedNetwork, setKeyValue, currencyData, modalComponent: {values}} = useGlobalState();
  const [search, setSearch] = useState("");

  const type = (values as {type: "network"|"currency"|"feeCurrency"}).type

  const cryptoData = type === "network" ? networkData : currencyData

  const renderItem = ({ item }: { [key: string]: any }) => (
    <Pressable style={[styles.btn, {opacity: item.active ? 1 : 0.5}]} onPress={() => {
      if(item.active){
        type === "network"
        ? setKeyValue("selectedNetwork", item.id)
        : type === "currency"
        ? setKeyValue("selectedCurrency", item.id)
        : setKeyValue("selectedFeeCurrency", item.id)
        setKeyValue("modalComponent", { screen: ModalScreen.None, values: {} });
      }
    }}>
      <DefaultView
        style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
      >
        {item.logo && item.logo(24)}
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
