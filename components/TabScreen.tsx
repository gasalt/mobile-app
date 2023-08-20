
import { SafeAreaView } from 'react-native-safe-area-context';
import SwipeModal from './SwipeModal';
import { StatusBar } from 'expo-status-bar';
import { useGlobalState } from '../sdk/state';
import styles from '../styles';


export default function TabScreen({ children }: any) {
    const {modalComponent, setKeyValue} = useGlobalState();

    return (
        <SafeAreaView style={styles.tabScreen}>
            <StatusBar translucent={false} backgroundColor={styles.tabScreen.backgroundColor} />
            {children}
            <SwipeModal showModal={modalComponent} setShowModal={(value: boolean) => setKeyValue("modalComponent", value)} />
        </SafeAreaView>
    );
}
