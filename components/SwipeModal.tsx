import { StyleSheet, View } from "react-native";
import SwipeUpDownModal from "react-native-swipe-modal-up-down";
import { useGlobalState } from "../sdk/state";
import { ModalScreen, ModalType } from "../types/enums";
import getModalContent from "./Modals/getModalContent";


export default function SwipeModal() {
  const {modalComponent, setKeyValue} = useGlobalState()
  const {Screen, size} = getModalContent(modalComponent.screen)

  const onClose = () => {
    setKeyValue("modalComponent", {screen: ModalScreen.None, values: {}})
  }

  return (
    <SwipeUpDownModal
      MainContainerModal={{ backgroundColor: "transparent" }}
      modalVisible={size !== ModalType.None}
      PressToanimate
      onClose={() => setKeyValue("modalComponent", {screen: ModalScreen.None, values: {}})}
      //if you don't pass HeaderContent you should pass
      //marginTop in view of ContentModel to Make modal swipeable
      ContentModal={<Screen values={modalComponent.values} onClose={onClose} />}
      HeaderContent={
        <View style={styles.headerContainer}>
          <View style={styles.closeBar} />
        </View>
      }
      HeaderStyle={[{ marginTop: size }]}
      ContentModalStyle={[styles.modalStyle, {marginTop: size}]}
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
