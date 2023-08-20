
import { Button, StyleSheet, Text, View } from 'react-native';
import TabScreen from '../../components/TabScreen';
import { useGlobalState } from '../../sdk/state';
import { DefaultText, DefaultView } from '../../components/Defaults';


export default function App() {
    const {setKeyValue} = useGlobalState();

    return (
        <TabScreen>
            <DefaultView>
                <DefaultText>Wallet!</DefaultText>
                <Button
                    title={"Show modal"}
                    onPress={() => {
                        setKeyValue("modalComponent", true);
                    }}
                />
            </DefaultView>
        </TabScreen>

    );
}
