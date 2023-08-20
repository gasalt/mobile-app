import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 


const icons = {
    wallet: (props: any) => <Ionicons {...props} name="wallet" style={{ marginBottom: -3, color: props.color }} size={28} />,
    history: (props: any) => <MaterialCommunityIcons {...props} name="clock-time-four" style={{ marginBottom: -3, color: props.color }} size={28} />,
    browser: (props: any) => <MaterialCommunityIcons {...props} name="compass" style={{ marginBottom: -3, color: props.color }} size={28} />,
}

type Icons = keyof typeof icons;

export default function Icon(props: {name: Icons, focused: boolean}) {
    const SelectedIcon = icons[props.name]
    return <SelectedIcon {...props} color={props.focused ? "white" : "gray"} />;
}
