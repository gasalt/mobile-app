import { StyleSheet } from 'react-native';

export const guide = {
    mainBackground: "#0D0C27",
    primary: "#4A41C7", // shade5
    primaryHover: "#1A1467",
    primaryDisabled: "#827BD7",
    primaryWarning: "#C74141",
    secondary: "#262633",
    secondaryHover: "#090909",
    secondaryDisabled: "#262633",
    secondaryWarning: "#262633",
    black: "#000000",
    shade1: "#100E2F",
    shade2: "#16133F",
    shade3: "#2C257E",
    shade4: "#3931A5",
    shade5: "#4A41C7",
    shade6: "#675FD0",
    shade7: "#A09BE1",
    shade8: "#BBB8EA",
    shade9: "#DAD8F3",
    white: "#FFFFFF",

}

const styles = StyleSheet.create({
    tabBarStyle: {
        borderRadius: 80,
        marginHorizontal: 20,
        marginBottom: 10,
        height: 70,
        paddingBottom: 12,
        paddingTop: 10,
        position: "absolute",
        backgroundColor: "#191832",
        outline: "none",
        borderTopColor:"transparent",
        color: guide.white,

    },
    tabScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: guide.mainBackground,
        color: guide.white,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default styles;
