import { StyleSheet, Text, View } from 'react-native';
import TabScreen from '../../../components/TabScreen';


import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { DefaultText, DefaultView } from '../../../components/Defaults';

const Tab = createMaterialTopTabNavigator();

const TabPage1 = () => {
  return (
    <DefaultView style={{ backgroundColor: "white" }}>
      <DefaultText>Top 1</DefaultText>
    </DefaultView>
  );
};

const TabPage2 = () => {
  return (
    <DefaultView style={{ backgroundColor: "white" }}>
      <DefaultText>Top 2</DefaultText>
    </DefaultView>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        tabBarPressOpacity: 1,
        tabBarPressColor: "rgba(0,0,0,0)",
        tabBarContentContainerStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarIndicatorStyle: {
          display: "none",
        },
        tabBarItemStyle: {
          width: 70,
          paddingHorizontal: 0,
          position: "relative",
          padding: 0,
          height: 45,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarStyle: {
          width: "auto",
          height: 45,
          borderBottomColor: "red",
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen name="Page1" component={TabPage1} />
      <Tab.Screen name="Page2" component={TabPage2} />
    </Tab.Navigator>
  );
}

export default function App() {
    return (
        <TabScreen>
           <MyTabs />
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
