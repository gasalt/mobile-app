import { useState } from "react";
import { FlatList, Pressable } from "react-native";
import Close from "../../assets/svgs/Close";
import QR from "../../assets/svgs/QR";
import RoundedCancel from "../../assets/svgs/RoundedCancel";
import {
  useOpenFileExplorer,
  useReadLocalData,
  useReadRemoteData,
} from "../../hooks/useFileExplorer";
import { useGlobalState } from "../../sdk/state";
import { ModalScreen } from "../../types/enums";
import CustomButton from "../CustomButton";
import { DefaultText, DefaultView } from "../Defaults";
import FloatingTextInput from "../inputs/FloatingInput";

export default function MultiAddress() {
  const { setKeyValue } = useGlobalState();
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const [data, setData] = useState<Array<{ address: string; amount: string }>>(
    []
  );

  //   TODO: provide a proper validation
  const isGoogleLink = (value: string) =>
    value.startsWith("https://docs.google.com/spreadsheets");

  const isLocalData = (value: string) => value.endsWith(".xlsx");

  //   TODO: use web3.js or ether.js to validate
  const isWeb3Address = (value: string) =>
    value.startsWith("0x") || value.endsWith(".eth");

  const onAddAddress = () => {
    const addresses = [...data];
    addresses.push({ address, amount });
    setData(addresses);
    setAddress("");
    setAmount("");
  };

  const onRemove = (value: string) => {
    const addresses = [...data];
    const filtered = addresses.filter(
      (singleAddress) => singleAddress.address !== value
    );
    setData(filtered);
  };

  const renderItem = ({ item, index }: { [key: string]: any }) => (
    <DefaultView
      style={{
        marginVertical: 5,
      }}
    >
      <DefaultView
        style={{
          flexDirection: "row",
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#2D2A52",
          backgroundColor: "#2D2A52",
        }}
      >
        <DefaultView
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            backgroundColor: "#675FD0",
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            flex: 0.03,
          }}
        >
          <DefaultText>{index + 1}</DefaultText>
        </DefaultView>
        <DefaultView style={{ marginHorizontal: 10, flex: 0.93 }}>
          <DefaultView style={{ marginVertical: 20 }}>
            <DefaultText style={{ fontSize: 16 }}>Amount:</DefaultText>
            <DefaultText style={{ opacity: 0.56, fontSize: 16 }}>
              {item.amount}
            </DefaultText>
          </DefaultView>
          <DefaultView style={{ marginBottom: 20 }}>
            <DefaultText style={{ fontSize: 16 }}>Address:</DefaultText>
            <DefaultText style={{ opacity: 0.56, fontSize: 16 }}>
              {item.address}
            </DefaultText>
          </DefaultView>
        </DefaultView>
        <Pressable
          style={{ marginTop: 20, cursor: "pointer" }}
          onPress={() => onRemove(item.address)}
        >
          <RoundedCancel />
        </Pressable>
      </DefaultView>
    </DefaultView>
  );

  return (
    <DefaultView style={{ flex: 1 }}>
      <DefaultView
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 48,
        }}
      >
        <DefaultText
          style={{ fontWeight: "500", fontSize: 18, lineHeight: 20 }}
        >
          Send to multiple addresses
        </DefaultText>
      </DefaultView>

      <DefaultView
        style={[
          {
            paddingHorizontal: 8,
            marginTop: 10,
          },
          address && (isGoogleLink(address) || isLocalData(address))
            ? { marginBottom: 40 }
            : {},
        ]}
      >
        <FloatingTextInput
          label="Address(0x/.eth) or Google sheet link"
          rightElement={
            address === "" ? (
              <Pressable
                onPress={() =>
                  setKeyValue("modalComponent", {
                    values: {},
                    screen: ModalScreen.QRCodeScan,
                  })
                }
              >
                <QR />
              </Pressable>
            ) : (
              <Pressable onPress={() => setAddress("")}>
                <Close />
              </Pressable>
            )
          }
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
      </DefaultView>

      {address && isWeb3Address(address) && (
        <DefaultView
          style={{
            paddingHorizontal: 8,
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <FloatingTextInput
            label="Amount"
            rightElement={
              <Pressable>
                <DefaultText style={{ color: "#9DF190" }}>MAX</DefaultText>
              </Pressable>
            }
            value={amount}
            onChangeText={(text) => setAmount(text)}
            mode="decimal"
          />
        </DefaultView>
      )}

      {!address && (
        <DefaultView
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 20,
          }}
        >
          <DefaultText style={{ fontWeight: "600", fontSize: 16 }}>
            OR
          </DefaultText>
        </DefaultView>
      )}

      <DefaultView style={{ paddingHorizontal: 16 }}>
        {isLocalData(address) && (
          <CustomButton
            label="Import addresses from phone"
            variant="primary"
            onPress={() => useReadLocalData(address,setData, setAddress)}
          />
        )}
        {isGoogleLink(address) && (
          <CustomButton
            label="Import addresses from google sheets"
            variant="primary"
            onPress={() => useReadRemoteData(address)}
          />
        )}
        {isWeb3Address(address) && amount && (
          <CustomButton
            label="Add Address"
            variant="primary"
            onPress={onAddAddress}
          />
        )}

        {!address && (
          <CustomButton
            label="Import CSV"
            variant="primary"
            onPress={() => useOpenFileExplorer(setAddress)}
          />
        )}
      </DefaultView>

      {data.length > 0 && (
        <DefaultView
          style={{
            flex: 1,
            paddingHorizontal: 16,
            marginVertical: 20,
          }}
        >
          <FlatList
            contentContainerStyle={{ marginBottom: 10 }}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, i) => `${item.address}-${i}`}
          />
          <CustomButton
            label={`Send to ${data.length} ${
              data.length > 1 ? "addresses" : "address"
            }`}
            variant="primary"
            btnStyle={{ marginTop: 10, marginBottom: 60 }}
            onPress={() => {}}
          />
        </DefaultView>
      )}
    </DefaultView>
  );
}
