import { Tabs } from "expo-router";
import Icon from '../../components/Icon';
import styles from '../../styles'
import { DefaultText } from '../../components/Defaults';


export default function Main() {
    return (
        <Tabs
            screenOptions={{tabBarStyle: styles.tabBarStyle }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    href: "/",
                    tabBarIcon: (props) => <Icon focused={props.focused} name="wallet" />,
                    tabBarLabel: (props) =>
                        <DefaultText style={{color: props.focused? "white" : "gray", fontSize: 10}}>
                            Wallet
                        </DefaultText>,
                    }}
            />
            <Tabs.Screen
                name="txhistory"
                options={{
                    headerShown: false,
                    href: "/txhistory",
                    tabBarIcon: (props) => <Icon focused={props.focused} name="history" />,
                    tabBarLabel: (props) =>
                        <DefaultText style={{color: props.focused? "white" : "gray", fontSize: 10}}>
                            History
                        </DefaultText>,
                    }}
            />
            <Tabs.Screen
                name="browser"
                options={{
                    headerShown: false,
                    href: "/browser",
                    tabBarIcon: (props) => <Icon focused={props.focused} name="browser" />,
                    tabBarLabel: (props) =>
                        <DefaultText style={{color: props.focused? "white" : "gray", fontSize: 10}}>
                            Browser
                        </DefaultText>,
                    }}
            />
        </Tabs>
    )
}
