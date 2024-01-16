import { useEffect, useState } from "react";
import { Pressable, StyleSheet } from "react-native";

import Close from "@/assets/svgs/Close";
import QR from "@/assets/svgs/QR";
import { DefaultText, DefaultView } from "@/components/Defaults";
import FloatingTextInput from "@/components/inputs/FloatingInput";
import AddMultiple from "@/assets/svgs/AddMultiple";
import CustomButton from "@/components/CustomButton";
import CryptoDropdown from "@/components/CryptoDrown";
import Polygon from "@/assets/svgs/Polygon";
import { useGlobalState } from "@/sdk/state";
import { ModalScreen } from "@/types/enums";
import { formatUnits } from "ethers";
import useSelected from "@/hooks/useSelected";

export default function Send() {
  const { setKeyValue, feeValue: _fee, modalCallback } = useGlobalState();
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const {selectedCurrency, selectedFeeCurrency} = useSelected()
  const feeValue = formatUnits(_fee, selectedFeeCurrency.decimals)
  const feeValueDisp = selectedCurrency.decimals > 6 ? Number(feeValue).toFixed(6) : feeValue


  const formattedBalance = formatUnits(selectedCurrency.balance, selectedCurrency.decimals);
  const _maxAmount = Number(formattedBalance) - Number(feeValue);
  const maxAmount = _maxAmount > 0 ? _maxAmount : 0;

  useEffect(() => {
    if(modalCallback.type === ModalScreen.QRCodeScan && modalCallback.value){
      setAddress(modalCallback.value)
      setKeyValue("modalCallback", {type: ModalScreen.None, value: null})
    }
  }, [modalCallback])


  const onPress = () =>
    setKeyValue("modalComponent", { values: {type: "feeCurrency"}, screen: ModalScreen.Crypto });

  const isSameToken = selectedFeeCurrency.symbol.toLowerCase() === selectedCurrency.symbol.toLowerCase()
  
  return (
    <DefaultView style={styles.container}>
      <FloatingTextInput
        label="Recipient's Address"
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
        inputStyle={{marginHorizontal: 8}}
      />
      <Pressable
        style={styles.multiple}
        onPress={() =>
          setKeyValue("modalComponent", {
            values: {},
            screen: ModalScreen.MultiAddress,
          })
        }
      >
        <AddMultiple />
        <DefaultText>Send to multiple addresses</DefaultText>
      </Pressable>

      <FloatingTextInput
        label="Amount"
        rightElement={
          <Pressable
            onPress={() => setAmount(maxAmount.toString())}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <DefaultText style={{ color: "#9DF190" }}>MAX</DefaultText>
          </Pressable>
        }
        value={amount}
        onChangeText={(text) => setAmount(text)}
        mode="decimal"
        inputStyle={{marginHorizontal: 8}}
      />

      <DefaultView
        style={{
          margin: 10,
          backgroundColor: "#191832",
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
        }}
      >
        <DefaultView style={styles.item}>
          <DefaultText>Fee</DefaultText>
          <DefaultView
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: -20,
            }}
          >
            <DefaultText style={{ left: 15 }}>{feeValueDisp}</DefaultText>
            <CryptoDropdown
              textStyle={styles.textStyle}
              btnStyle={styles.btnStyle}
              onPress={onPress}
              text={selectedFeeCurrency.symbol}
              showLogo={false}
              logo={<Polygon />}
            />
          </DefaultView>
        </DefaultView>
        <DefaultView style={styles.item}>
          <DefaultText>Total</DefaultText>
          <DefaultText>{isSameToken ? `${(+amount+(+feeValueDisp))} ${selectedCurrency.symbol}` : `${amount} ${selectedCurrency.symbol} + ${feeValueDisp} ${selectedFeeCurrency.symbol}`}</DefaultText>
        </DefaultView>
      </DefaultView>

      <DefaultView style={{ paddingHorizontal: 12 }}>
        <CustomButton
          label="Send"
          variant="primary"
          onPress={() => {
              if(address === "" || amount === "") return;
              setKeyValue("modalComponent", {
                screen: ModalScreen.SendModal,
                values: {
                  receiver: address,
                  value: amount,
                },
              })
            }
          }
        />
      </DefaultView>
    </DefaultView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 12 },
  multiple: {
    flexDirection: "row",
    gap: 4,
    marginHorizontal: 8,
    marginVertical: 8
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
    alignItems: "center",
  },
  textStyle: {
    color: "#A69FFF",
    fontSize: 10,
  },
  btnStyle: {
    width: 70,
    paddingVertical: 0.5,
  },
});
