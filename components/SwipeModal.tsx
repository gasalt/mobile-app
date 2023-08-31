import { ReactNode } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import SwipeUpDownModal from "react-native-swipe-modal-up-down";

interface SwipeModalProps {
  showModal: boolean;
  onClose: () => void;
  contentModal: ReactNode;
  headerStyle?: ViewStyle;
  contentModalStyle: ViewStyle;
}

export default function SwipeModal({
  showModal,
  onClose,
  contentModal,
  headerStyle,
  contentModalStyle,
}: SwipeModalProps) {
  return (
    <SwipeUpDownModal
      MainContainerModal={{ backgroundColor: "transparent" }}
      modalVisible={showModal}
      PressToanimate
      onClose={onClose}
      //if you don't pass HeaderContent you should pass
      //marginTop in view of ContentModel to Make modal swipeable
      HeaderContent={
        <View style={styles.headerContainer}>
          <View style={styles.closeBar} />
        </View>
      }
      ContentModal={contentModal}
      HeaderStyle={[ headerStyle]}
      ContentModalStyle={[styles.modalStyle, contentModalStyle]}
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
