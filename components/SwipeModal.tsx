import { StyleSheet, Text, View } from 'react-native';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';


export default function SwipeModal({showModal, setShowModal}: {showModal: boolean, setShowModal: Function}) {
    return (
        <SwipeUpDownModal
            MainContainerModal={{backgroundColor:"transparent"}}
            modalVisible={showModal}
            PressToanimate={true}
            onClose={() => {
                setShowModal(false);
            }}
            //if you don't pass HeaderContent you should pass
            //marginTop in view of ContentModel to Make modal swipeable
            HeaderContent={
                <View style={styles2.headerContainer}>
                    <View style={styles2.closeBar}></View>
                </View>
            }
            ContentModal={
                <View style={{backgroundColor:"white", marginTop: 40}}>
                    <Text>Hi!</Text>
                </View>
            }
            HeaderStyle={styles2.headerStyle}
            ContentModalStyle={styles2.modalStyle}
        />
    )
}



const styles2 = StyleSheet.create({
    containerContent: { 
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerStyle: {
        marginTop:450,
    },
    modalStyle: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#16133F',
        marginTop: 450,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
    },
    headerContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,   
    },
    closeBar: {
        width: 100,
        height:4,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        backgroundColor: "white"
    }
});
