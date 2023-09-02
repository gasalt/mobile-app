import { Pressable } from "react-native";
import { DefaultText, DefaultView } from "../Defaults";
import QRCode from "react-native-qrcode-svg";
import { guide } from "../../styles";
import CustomButton from "../CustomButton";
import { useState } from "react";

export default function AddressInfo({values}: ModalProps) {
  const [selectedButton, setSelectedButton] = useState<"address" | "eth">(
    "address"
  );
  return (
    <DefaultView style={{ flex: 1 }}>
      <DefaultView
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 48,
        }}
      >
        <DefaultText
          style={{ fontWeight: "600", fontSize: 24, lineHeight: 24 }}
        >
          Address Info
        </DefaultText>
        <DefaultText
          style={{ fontWeight: "400", fontSize: 14, lineHeight: 20 }}
        >
          Scan the QR code to receive payment
        </DefaultText>
      </DefaultView>

      <DefaultView
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pressable
          style={[
            {
              borderWidth: 1,
              borderColor: "#4A41C7",
              padding: 5,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              borderRightWidth: 0,
            },
            selectedButton === "address" && {
              backgroundColor: "#4A41C7",
            },
          ]}
          onPress={() => setSelectedButton("address")}
        >
          <DefaultText>{`Address (0x)`}</DefaultText>
        </Pressable>
        <Pressable
          style={[
            {
              borderWidth: 1,
              borderColor: "#4A41C7",
              padding: 5,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              borderLeftWidth: 0,
            },
            selectedButton === "eth" && {
              backgroundColor: "#4A41C7",
            },
          ]}
          onPress={() => setSelectedButton("eth")}
        >
          <DefaultText>{`ens (.eth)`}</DefaultText>
        </Pressable>
      </DefaultView>

      <DefaultView
        style={{
          marginVertical: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <QRCode value="https://" size={200} />
      </DefaultView>

      <DefaultView
        style={{
          backgroundColor: "#BBB8EA",
          paddingVertical: 12,
          paddingHorizontal: 16,
          marginHorizontal: 20,
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DefaultText style={{ color: guide.primary, lineHeight: 24 }}>
          TRY2Pczuiuadsak3VcQSmupPwtVUTYPq2X
        </DefaultText>
      </DefaultView>

      <DefaultView style={{ paddingHorizontal: 16, marginTop: 24 }}>
        <CustomButton label="Copy" variant="primary" />
      </DefaultView>
    </DefaultView>
  );
}
