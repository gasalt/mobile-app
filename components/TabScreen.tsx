
import { SafeAreaView } from 'react-native-safe-area-context';
import SwipeModal from './SwipeModal';
import { StatusBar } from 'expo-status-bar';
import { useGlobalState } from '../sdk/state';
import styles from '../styles';
import { useRoute } from '@react-navigation/native';
import { usePathname } from "expo-router"


export default function TabScreen({ children }: any) {
    const {modalComponent, setKeyValue} = useGlobalState();
    const pathname = usePathname();

    const route = useRoute();
    const routeName = route.name === "index" ? "/" : `/${route.name}`;
    const isCurrentRoute = pathname === routeName;

    return (
        <SafeAreaView style={styles.tabScreen}>
            <StatusBar translucent={false} backgroundColor={styles.tabScreen.backgroundColor} />
            {children}
            {isCurrentRoute && <SwipeModal showModal={modalComponent} setShowModal={(value: boolean) => setKeyValue("modalComponent", value)} />}
        </SafeAreaView>
    );
}
