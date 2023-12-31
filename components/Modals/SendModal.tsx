import { ActivityIndicator, Pressable, StyleSheet } from "react-native";
import { DefaultText, DefaultView } from "../Defaults";
import CustomButton from "../CustomButton";
import { useEffect, useState } from "react";
import { useGlobalState } from "../../sdk/state";
import { ModalScreen } from "../../types/enums";
import DoneCircle from "../../assets/svgs/DoneCircle";
import RightCaret from "../../assets/svgs/RightCaret";
import BigPolygon from "../../assets/svgs/BigPolygon";

export default function SendModal() {
  const { setKeyValue } = useGlobalState();

  const [status, setStatus] = useState<"loading" | "done" | undefined>(
    undefined
  );

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (status === "loading") {
      timer = setTimeout(() => setStatus("done"), 3000);
    }
    return () => clearTimeout(timer);
  }, [status]);

  const onSend = () => {
    setStatus("loading");
  };

  const onClose = () =>
    setKeyValue("modalComponent", {
      screen: ModalScreen.None,
      values: {},
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
          <ActivityIndicator size="large" style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }} color="#4A41C7"  />
          <DefaultView style={{marginTop: 30, alignItems: "center", justifyContent: "center"}}>
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
        <CustomButton label="Close" variant="primary" onPress={onClose} />
      </DefaultView>
    );
  }

  return (
    <DefaultView style={styles.container}>
      <DefaultView style={styles.topView}>
        <DefaultView style={styles.item}>
          <DefaultText style={styles.label}>Send:</DefaultText>
          <DefaultText style={styles.value}>1000MATIC</DefaultText>
        </DefaultView>
        <DefaultView style={styles.item}>
          <DefaultText style={styles.label}>To:</DefaultText>
          <DefaultText style={styles.value}>
            0efghjWIgun89mxftrnbn67Ad
          </DefaultText>
        </DefaultView>
        <DefaultView style={styles.item}>
          <DefaultText style={styles.label}>Transaction fee:</DefaultText>
          <DefaultText style={styles.value}>0.23MATIC</DefaultText>
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
              values: {},
            })
          }
        >
          <DefaultView
            style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
          >
            <BigPolygon />
            <DefaultText style={{ color: "#A69FFF", fontSize: 16 }}>
              Polygon
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
