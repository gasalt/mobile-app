import TabScreen from "@/components/TabScreen";
import { DefaultText, DefaultView } from "@/components/Defaults";
import {
  Dimensions,
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";
import FloatingTextInput from "@/components/inputs/FloatingInput";
import { useState } from "react";
import Search from "@/assets/svgs/Search";
import Close from "@/assets/svgs/Close";
import Uniswap from "@/assets/svgs/Uniswap";
import Coinbase from "@/assets/svgs/Coinbase";
import MetaMask from "@/assets/svgs/MetaMask";
import LargePolygon from "@/assets/svgs/LargePolygon";
import UpRight from "@/assets/svgs/UpRight";
import { useRouter } from "expo-router";
import { Stack } from "expo-router";
import { SafeAreaView, } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const sites = [
  { name: "Uniswap", logo: <Uniswap /> },
  { name: "Polygon", logo: <LargePolygon /> },
  { name: "Coinbase", logo: <Coinbase /> },
  { name: "MetaMask", logo: <MetaMask /> },
  { name: "Uniswap", logo: <Uniswap /> },
  { name: "Polygon", logo: <LargePolygon /> },
  { name: "Coinbase", logo: <Coinbase /> },
  { name: "MetaMask", logo: <MetaMask /> },
  { name: "Uniswap", logo: <Uniswap /> },
  { name: "Polygon", logo: <LargePolygon /> },
  { name: "Coinbase", logo: <Coinbase /> },
  { name: "MetaMask", logo: <MetaMask /> },
  { name: "Uniswap", logo: <Uniswap /> },
  { name: "Polygon", logo: <LargePolygon /> },
  { name: "Coinbase", logo: <Coinbase /> },
  { name: "MetaMask", logo: <MetaMask /> },
];

const visited = [
  { name: "Uniswap", logo: <Uniswap />, url: "https://uniswap.com/" },
  { name: "Polygon", logo: <LargePolygon />, url: "https://polygonscan.com/" },
  { name: "Coinbase", logo: <Coinbase />, url: "https://www.coinbase.com/" },
  { name: "Uniswap", logo: <Uniswap />, url: "https://uniswap.com/" },
  { name: "Polygon", logo: <LargePolygon />, url: "https://polygonscan.com/" },
  { name: "Coinbase", logo: <Coinbase />, url: "https://www.coinbase.com/" },
];

export default function Browser() {
  const [search, setSearch] = useState("");
  const router = useRouter();


  const renderItem = ({ item }: { [key: string]: any }) => (
    <DefaultView
      style={{
        gap: 8,
        padding: 4,
        marginTop: 10,
        marginLeft: -4,
        marginRight: 5,
      }}
    >
      <DefaultView
        style={{
          borderRadius: 8,
          alignItems: "center",
          backgroundColor: "#25243D",
          height: 80,
          width: 80,
          justifyContent: "center",
          position: "relative",
        }}
      >
        {item.logo}
        <Pressable
          style={{ position: "absolute", right: 7, top: 3 }}
          onPress={() => alert(item.name)}
        >
          <DefaultText style={{ fontSize: 16 }}>x</DefaultText>
        </Pressable>
      </DefaultView>
      <DefaultText style={{ fontSize: 14, textAlign: "center" }}>
        {item.name}
      </DefaultText>
    </DefaultView>
  );

  const renderVisitedItem = ({ item }: { [key: string]: any }) => (
    <Pressable
      onPress={() =>
        router.push({ pathname: "/browserPage", params: { ...item } })
      }
    >
      <DefaultView
        style={{
          padding: 12,
          marginTop: 10,
          backgroundColor: "#25243D",
          borderRadius: 8,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <DefaultView
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: 16,
          }}
        >
          {item.logo}

          <DefaultText style={{ fontSize: 14, textAlign: "center" }}>
            {item.url}
          </DefaultText>
        </DefaultView>
        <UpRight />
      </DefaultView>
    </Pressable>
  );
  return (
    <TabScreen>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        
      />
      <DefaultView style={styles.container}>
        <FloatingTextInput
          label=""
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="Site name or URL"
          rightElement={
            search ? (
              <Pressable onPress={() => setSearch("")}>
                <Close />
              </Pressable>
            ) : (
              <Search />
            )
          }
        />
        <DefaultView style={{ flex: 1, marginBottom: 30 }}>
          <DefaultText style={styles.header}>Favorites</DefaultText>
          <FlatList
            data={sites}
            contentContainerStyle={{
              paddingHorizontal: 10,
              justifyContent: "space-between",
            }}
            renderItem={renderItem}
            keyExtractor={(item, i) => `${item.name}-${i}`}
            numColumns={4}
          />
        </DefaultView>
        <DefaultView
          style={{
            flex: 1,
            marginBottom: 30,
            marginTop: Platform.OS === "android" ? -20 : -40,
          }}
        >
          <DefaultText style={styles.header}>Recently Visited</DefaultText>
          <FlatList
            contentContainerStyle={{
              paddingHorizontal: 10,
            }}
            data={visited}
            renderItem={renderVisitedItem}
            keyExtractor={(item, i) => `${item.url}-${i}`}
          />
        </DefaultView>
      </DefaultView>
    </TabScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: width * 0.95, marginTop: 20 },
  header: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    marginHorizontal: 10,
    marginTop: 20,
  },
});
