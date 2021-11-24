import React, { useState } from "react";
// import * as React from "react";
import { View, FlatList, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, Picker } from "react-native";
import AppButton from "../components/AppButton";
import {
  TextInput,
  TouchableOpacity,
  MaterialCommunityIcons,
} from "react-native";
import AppPicker from "../components/AppPicker";

import PickerItemss from "../GoalMagoal/PickerItemss";
import PickerItemsss from "./PickerItemsss";
import HabitComponent from "./HabitComponent";
import HabitComponents from "./HabitComponentss";
import InputPicker from "./InputPicker";
import HabitPicker from "../GoalMagoal/HabitPicker";
import HabitPickers from "../GoalMagoal/HabitPickers";
import { ScrollView } from "react-native-gesture-handler";
import Repeats from "./Repeats";

function HomeScreen({ label }) {
  return (
    <>
      <View style={{ backgroundColor: "white" }}>
        <Text
          style={{
            fontWeight: "bold",
            marginVertical: 3,
            marginHorizontal: 10,
          }}
        >
          *My goal is to:{" "}
        </Text>
        <TextInput
          placeholder="make your goal as spacific as posiable"
          style={{
            padding: 10,
            height: 40,
            width: "95%",
            marginHorizontal: 10,
            borderWidth: 1,
          }}
        />
        <Text style={{ marginHorizontal: 10, top: 5 }}>
          if you had an extra hour each day, what would you do?{" "}
        </Text>
        <PickerItemss />

        <Text style={{ fontWeight: "bold", bottom: 25, marginHorizontal: 10 }}>
          *Privacy{" "}
        </Text>
        <View>
          <Text style={{ top: 35, fontWeight: "bold", marginHorizontal: 10 }}>
            *How important is your habit?
          </Text>
          <View style={{ width: "100%", height: 100 }}>
            <PickerItemsss />
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginHorizontal: 10,
            top: 10,
            width: "95%",

            height: 40,
            backgroundColor: "#42C0F5",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Create</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

function SettingsScreen() {
  return (
    <>
      <View style={{ backgroundColor: "white" }}>
        <Text
          style={{
            fontWeight: "bold",
            marginVertical: 3,
            marginHorizontal: 10,
          }}
        >
          *My goal is to:{" "}
        </Text>
      </View>

      <InputPicker />

      <HabitPicker />

      <Text style={{ fontWeight: "bold", bottom: 50, marginHorizontal: 10 }}>
        *Privacy{" "}
      </Text>
      <View>
        <Text style={{ fontWeight: "bold", marginHorizontal: 10, top: 5 }}>
          *Repeats
        </Text>
        <Repeats />
      </View>
      <View>
        <Text style={{ fontWeight: "bold", marginHorizontal: 10, top: 20 }}>
          *How important is your habit?
        </Text>
        <View style={{ width: "100%", height: 100 }}>
          <HabitPickers />
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginHorizontal: 10,
          // top: 10,
          width: "95%",
          height: 40,
          backgroundColor: "#42C0F5",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          bottom: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Create</Text>
      </TouchableOpacity>
      {/* <Repeats /> */}
    </>
  );
}

const Tab = createMaterialTopTabNavigator();

const ExtraRpeat = () => {
  return (
    <View style={{ height: 400 }}>
      <NavigationContainer>
        <Tab.Navigator
          swipeEnabled={false}
          sceneContainerStyle={{ backgroundColor: "white" }}
          tabBarOptions={{
            activeTintColor: "white",
            inactiveTintColor: "black",
            tabStyle: {
              marginVertical: -5,
            },
            style: {
              alignSelf: "center",
              width: 240,
              height: 40,
              borderRadius: 30,
              backgroundColor: "#F2F2F2",
            },
            indicatorStyle: {
              backgroundColor: "#42C0F5",
              height: 40,
              borderRadius: 30,
            },
            labelStyle: {
              fontSize: 15,
              fontWeight: "bold",
            },
          }}
        >
          <Tab.Screen name="Goal" component={HomeScreen} />
          <Tab.Screen name="Habit" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default ExtraRpeat;
