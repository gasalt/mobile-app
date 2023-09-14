import React, { useState } from "react";
import { DefaultText, DefaultView } from "@/components/Defaults";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Refresh from "@/assets/svgs/Refresh";
import DownLeft from "@/assets/svgs/DownLeft";
import UpRight from "@/assets/svgs/UpRight";

// TODO: Move this later
type transType = "inflow" | "outflow" | "swap"

const transactions = [
  {
    id: 1,
    amount: "40000 GST",
    address: "0Xfghjo...bn67Addv",
    status: "SUCCESSFUL",
    type: "inflow",
  },
  {
    id: 2,
    amount: "50000 GST",
    address: "0Xfghn...bn67Addv",
    status: "SUCCESSFUL",
    type: "outflow",
  },
  {
    id: 3,
    amount: "60000 GST",
    address: "0Xfghjm...bn67Addv",
    status: "FAILED",
    type: "swap",
  },
];

const getColor: Record<transType, string> = {
    inflow: "#27AE60",
    outflow: "#EC4C4C",
    swap: "#4A41C7"
}

const getIconType = {
    inflow: <DownLeft />,
    outflow: <UpRight />,
    swap: <Refresh />
}

const Empty = () => (
  <DefaultView style={styles.emptyContainer}>
    <DefaultView style={styles.outerCircle}>
      <DefaultView style={styles.innerCircle}>
        {/* Add svg icon here */}
      </DefaultView>
    </DefaultView>
    <DefaultText style={styles.noText}>No transactions yet</DefaultText>
  </DefaultView>
);

const All = () => {
  const [data] = useState([]);

  if (data.length !== 0) {
    return <Empty />;
  }

  const renderItem = ({ item }: { [key: string]: any }) => (
    <DefaultView
      style={{
        marginTop: 16,
        marginHorizontal: 12,
      }}
    >
      <DefaultView
        style={{
          flexDirection: "row",
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#2D2A52",
          backgroundColor: "#2D2A52",
          alignItems: "center",
        }}
      >
        {/* Start */}
        <DefaultView
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 8,
            margin: 10,
            backgroundColor: getColor[item.type as transType],
            borderRadius: 8,
            width: 50,
            height: 50,
          }}
        >
          {getIconType[item.type as transType]}
        </DefaultView>

        {/* middle */}
        <DefaultView style={{ marginTop: -6, flex: 1 }}>
          <DefaultText
            style={{
              fontSize: 18,
              fontWeight: "600",
              marginBottom: 12,
              lineHeight: 24,
            }}
          >
            {item.amount}
          </DefaultText>
          <DefaultText style={{ opacity: 0.56, fontSize: 12, marginTop: -5 }}>
            {item.address}
          </DefaultText>
        </DefaultView>

        {/* End */}
        <DefaultView style={{ marginRight: 16, marginTop: -6 }}>
          <DefaultText style={{marginBottom: 12, fontSize: 12, textAlign: "right"}}>JAN 2 2023</DefaultText>
          <DefaultText style={{ opacity: 0.56, fontSize: 12,  marginTop: -5, textAlign: "right"}}>{item.status}</DefaultText>
        </DefaultView>
      </DefaultView>
    </DefaultView>
  );
  return (
    <DefaultView style={styles.container}>
      <FlatList
        contentContainerStyle={{ marginBottom: 10 }}
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item, i) => `${item.id}-${i}`}
      />
    </DefaultView>
  );
};

export default All;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 120
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -120,
  },
  outerCircle: {
    backgroundColor: "#191832",
    borderRadius: 200,
    height: 175,
    width: 175,
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    backgroundColor: "#A69FFF",
    borderRadius: 200,
    height: 80,
    width: 80,
  },
  noText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
  },
});
