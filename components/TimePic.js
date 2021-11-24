import * as React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Calendar from "./Calender";
// import SlotButton from "./DayButton";
import BookingSlot from "./DaySlot";

function HomeScreen() {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <BookingSlot />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Calendar />
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function TimePic() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "black",

          style: {
            // justifyContent: "center",
            // alignItems: "center",
            width: 280,
            height: 30,
            backgroundColor: "#f5f5f5",
            marginLeft: 42,

            borderRadius: 30,
            // marginTop: 20,
          },
          indicatorStyle: {
            backgroundColor: "#add8e6",
            height: 30,
            // width: 100,
            borderRadius: 30,
          },
          labelStyle: {
            fontSize: 15,
            marginVertical: -17,

            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen name="Weekly" component={HomeScreen} />
        <Tab.Screen name="Monthly" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
