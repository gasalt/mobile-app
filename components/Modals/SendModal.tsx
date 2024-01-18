import { ActivityIndicator, Linking, Pressable, StyleSheet } from "react-native";
import { DefaultText, DefaultView } from "../Defaults";
import CustomButton from "../CustomButton";
import { useState } from "react";
import { useGlobalState } from "../../sdk/state";
import { ModalScreen } from "../../types/enums";
import DoneCircle from "../../assets/svgs/DoneCircle";
import RightCaret from "../../assets/svgs/RightCaret";
import CoinLogo from "@/assets/svgs/CoinLogo";
import { zeroAddress } from "@/utils/constants";
import { formatUnits, parseEther, parseUnits } from "ethers";
import { ERC20__factory } from "@/typechain-types";
import useSelected from "@/hooks/useSelected";

export default function SendModal() {
  const { setKeyValue, gsnSigner, relayProvider, gasalt, masterAddress, modalComponent: { values }, feeValue } = useGlobalState();
  const {selectedCurrency, selectedFeeCurrency} = useSelected()
  const [hash, setHash] = useState<string>("")
  const [status, setStatus] = useState<"loading" | "done" | undefined>(
    undefined
  );

  const previewLink = `https://goerli.etherscan.io/tx/${hash}`

  const _feeValue = formatUnits(feeValue, selectedFeeCurrency.decimals)
  const feeValueDisp = selectedCurrency.decimals > 6 ? Number(_feeValue).toFixed(6) : _feeValue

  const { receiver, value } = values as { receiver: "", value: "" }

  const onSend = async () => {
    setStatus("loading");
    try {
      let data = "0x"
      if (selectedCurrency.address === zeroAddress) {
        const tx = await gasalt.gaslessExecute(selectedFeeCurrency.address, 0, feeValue, parseEther(value), receiver, data, { from: masterAddress })
        console.log({ tx })
      } else {
        const token = ERC20__factory.connect(selectedFeeCurrency.address, gsnSigner)
        data = token.interface.encodeFunctionData("transfer", [receiver, parseUnits(value, selectedCurrency.decimals)])
        const tx = await gasalt.gaslessExecute(selectedFeeCurrency.address, 0, feeValue, "0", selectedCurrency.address, data, { from: masterAddress })
        const hash = await relayProvider.getTransactionHashFromRequestId((tx as any).hash)
        setHash(hash)
      }
    } catch (error) {
      console.log(error)
    }
    setStatus("done")
  };

  const onClose = () =>
    setKeyValue("modalComponent", {
      screen: ModalScreen.None,
      values: null,
    });

  if (status === "loading") {
    return (
      <DefaultView style={styles.container}>
        <DefaultView
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 150,
          }}
        >
          <ActivityIndicator size="large" style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }} color="#4A41C7" />
          <DefaultView style={{ marginTop: 30, alignItems: "center", justifyContent: "center" }}>
            <DefaultText
              style={{ fontSize: 20, lineHeight: 24, marginVertical: 10 }}
            >
              Sending...
            </DefaultText>
            <DefaultText style={{ color: "#8987AB", fontSize: 16 }}>
              Please do not close this tab
            </DefaultText>
          </DefaultView>
        </DefaultView>
      </DefaultView>
    );
  }

  if (status === "done") {
    return (
      <DefaultView style={styles.container}>
        <DefaultView
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 80,
            marginBottom: 40,
          }}
        >
          <DoneCircle />
          <DefaultText
            style={{ fontWeight: "600", fontSize: 20, marginVertical: 16 }}
          >
            Transaction completed
          </DefaultText>
          
        </DefaultView>
        {/* <CustomButton label="Close" variant="primary" onPress={onClose} /> */}
        <CustomButton label="View in explorer" variant="primary" onPress={() => Linking.openURL(previewLink)} />
      </DefaultView>
    );
  }

  return (
    <DefaultView style={styles.container}>
      <DefaultView style={styles.topView}>
        <DefaultView style={styles.item}>
          <DefaultText style={styles.label}>Send:</DefaultText>
          <DefaultText style={styles.value}>{`${value} ${selectedCurrency.symbol}`}</DefaultText>
        </DefaultView>
        <DefaultView style={styles.item}>
          <DefaultText style={styles.label}>To:</DefaultText>
          <DefaultText style={styles.value}>
            {receiver}
          </DefaultText>
        </DefaultView>
        <DefaultView style={styles.item}>
          <DefaultText style={styles.label}>Transaction fee:</DefaultText>
          <DefaultText style={styles.value}>{`${feeValueDisp} ${selectedFeeCurrency.symbol}`}</DefaultText>
        </DefaultView>
      </DefaultView>

      <DefaultView>
        <DefaultText style={{ marginBottom: 8 }}>
          Change transaction token
        </DefaultText>
        <Pressable
          style={styles.btn}
          onPress={() =>
            setKeyValue("modalComponent", {
              screen: ModalScreen.Crypto,
              values: { type: "feeCurrency" },
              from: {
                screen: ModalScreen.SendModal,
                values: {
                  receiver,
                  value,
                },
              }
            })
          }
        >
          <DefaultView
            style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
          >
            <CoinLogo image={selectedFeeCurrency.logo} symbol={selectedFeeCurrency.symbol} />
            <DefaultText style={{ color: "#A69FFF", fontSize: 16 }}>
              {selectedFeeCurrency.symbol}
            </DefaultText>
          </DefaultView>
          <RightCaret />
        </Pressable>
      </DefaultView>

      <DefaultView
        style={{
          marginTop: 24,
          flexDirection: "row",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <CustomButton
          label="Cancel"
          variant="cancel"
          btnStyle={{ width: "50%" }}
          onPress={onClose}
        />
        <CustomButton
          label="Send"
          variant="primary"
          btnStyle={{ width: "50%" }}
          onPress={onSend}
        />
      </DefaultView>
    </DefaultView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 24 },
  topView: {
    marginVertical: 42,
    backgroundColor: "#191832",
    borderColor: "#47475F",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 16,
    borderRadius: 16,
  },
  item: { gap: 4, marginBottom: 16 },
  label: { fontSize: 16 },
  value: { color: "white", opacity: 0.56, fontSize: 16 },
  btn: {
    flexDirection: "row",
    backgroundColor: "#191832",
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderColor: "#47475F",
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
