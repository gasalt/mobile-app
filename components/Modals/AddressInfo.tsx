import { Pressable } from "react-native";
import * as Clipboard from "expo-clipboard";
import { DefaultText, DefaultView } from "../Defaults";
import QRCode from "react-native-qrcode-svg";
import { guide } from "@/styles";
import CustomButton from "@/components/CustomButton";
import { useState } from "react";
import { useGlobalState } from "@/sdk/state";

const buttons = [
  { label: "Address (0x)", value: "address" },
  { label: "ens (.eth)", value: "eth" },
] as const;

export default function AddressInfo({ values }: ModalProps) {
  const {address} = useGlobalState()
  const [selectedButton, setSelectedButton] = useState<"address" | "eth">(
    "address"
  );

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (value: string) => {
    await Clipboard.setStringAsync(value);
  };

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
        {buttons.map((btn) => (
          <Pressable
            key={btn.label}
            style={[
              {
                borderWidth: 1,
                borderColor: "#4A41C7",
                padding: 5,
              },
              selectedButton === btn.value && {
                backgroundColor: "#4A41C7",
              },
              btn.value === "address" && {
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                borderRightWidth: 0,
              },
              btn.value === "eth" && {
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                borderLeftWidth: 0,
              },
            ]}
            onPress={() => setSelectedButton(btn.value)}
          >
            <DefaultText>{btn.label}</DefaultText>
          </Pressable>
        ))}
      </DefaultView>

      <DefaultView
        style={{
          marginVertical: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <QRCode value={address} size={200} />
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
        <DefaultText style={{ color: guide.primary, fontSize: 13, lineHeight: 24 }}>
          {address}
        </DefaultText>
      </DefaultView>

      <DefaultView style={{ paddingHorizontal: 16, marginTop: 24 }}>
        <CustomButton
          label={copied ? "Copied!" : "Copy address"}
          variant="primary"
          onPress={() => {
            copyToClipboard(address);
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
          }}
        />
      </DefaultView>
    </DefaultView>
  );
}
