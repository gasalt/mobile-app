import { StyleSheet, Text, View } from 'react-native';
import TabScreen from '../../components/TabScreen';



export default function App() {
    return (
        <TabScreen>
            <View>
                <Text>Tx History</Text>
            </View>
        </TabScreen>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
