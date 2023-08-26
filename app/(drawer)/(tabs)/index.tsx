import TabScreen from "../../../components/TabScreen";
import { useGlobalState } from "../../../sdk/state";
import { DefaultText, DefaultView } from "../../../components/Defaults";
import SwipeModal from "../../../components/SwipeModal";
import ClosedEye from "../../../assets/svgs/ClosedEye";
import { Dimensions } from "react-native";

import { guide } from "../../../styles";
import CryptoDropdown from "../../../components/CryptoDrown";
import Info from "../../../assets/svgs/Info";
import Copy from "../../../assets/svgs/Copy";

const { width } = Dimensions.get("window");


export default function App() {
  const { modalComponent, setKeyValue } = useGlobalState();

  return (
    <TabScreen>
      <DefaultView
        style={{
          backgroundColor: "#191832",
          width: width * 0.9,
          padding: 20,
          marginHorizontal: 20,
          borderRadius: 12,
          marginTop: -340,
        }}
      >
        <DefaultView
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            justifyContent: "center",
            marginBottom: 8,
          }}
        >
          <DefaultText style={{ fontSize: 16, fontWeight: "400" }}>
            Total balance
          </DefaultText>
          <ClosedEye />
        </DefaultView>

        <DefaultView
          style={{
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 20,
          }}
        >
          <DefaultText style={{ fontSize: 32, fontWeight: "600" }}>
            3,530.84
          </DefaultText>
          <CryptoDropdown onPress={() => alert("MATIC")} text="MATIC" />
        </DefaultView>
        <DefaultText style={{ color: "#9DF190", marginLeft: 36 }}>
          ~2,234.77 USD
        </DefaultText>
      </DefaultView>

      <DefaultView
        style={{
          backgroundColor: "#BBB8EA",
          width: width * 0.9,
          padding: 12,
          margin: 20,
          borderRadius: 6,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Info />
        <DefaultText style={{ color: guide.primary }}>
          0xE7E2cB8c81c10...C9Ce62EC754
        </DefaultText>
        <Copy />
      </DefaultView>

      {/* Tabs */}

      <SwipeModal
        showModal={modalComponent}
        setShowModal={(value: boolean) => setKeyValue("modalComponent", value)}
      />
    </TabScreen>
  );
}
