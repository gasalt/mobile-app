import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import SwipeUpDownModal from "react-native-swipe-modal-up-down";
import { useGlobalState } from "@/sdk/state";
import { ModalScreen, ModalType } from "@/types/enums";
import getModalContent from "@/components/Modals/getModalContent";
import { useState } from "react";

const { height } = Dimensions.get("window");


export default function SwipeModal() {
  const { modalComponent, setKeyValue } = useGlobalState()
  const { Screen, size } = getModalContent(modalComponent.screen)
  const [animate, setAnimate] = useState(false)

  const onClose = () => {
    setKeyValue("modalComponent", { screen: ModalScreen.None, values: {} })
  }

  return (
    <SwipeUpDownModal
      MainContainerModal={{ backgroundColor: "transparent", }}
      modalVisible={size !== ModalType.None}
      PressToanimate={animate}
      onClose={() => {
        setKeyValue("modalComponent", { screen: ModalScreen.None, values: {} })
        setAnimate(false)
      }}
      //if you don't pass HeaderContent you should pass
      //marginTop in view of ContentModel to Make modal swipeable
      ContentModal={<Screen values={modalComponent.values} onClose={onClose} />}
      HeaderContent={
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setAnimate(true)
          }}
        >
          <View style={styles.headerContainer}>
            <View style={styles.closeBar} />
          </View>
          <View style={{
            position:"absolute", backgroundColor: "rgba(0,0,0,0.3)", top:-height, left:0,
            height: height, width:"100%",
          }} />
          <View style={{
            position:"absolute", backgroundColor: "transparent", top:-35, left:0,
            height: 35, width:"100%",
          }} />
        </TouchableOpacity>
      }
      HeaderStyle={[{ marginTop: size }]}
      ContentModalStyle={[styles.modalStyle, { marginTop: size }]}
    />
  );
}

const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  headerContainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
  },

  modalStyle: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16133F",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },

  closeBar: {
    width: 100,
    height: 4,
    borderRadius: 4,
    backgroundColor: "white",
  },
});
