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
import InputMini from "../GoalMagoal/InputMini";
import Repeats from "./Repeats";
import HabitMiniPicker from "./HabitMiniPicker";
import HabitMiniPickers from "./HabitMiniPickers";

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
          <Text style={{ top: 40, fontWeight: "bold", marginHorizontal: 10 }}>
            *How important is your habit?
          </Text>
          <View style={{ width: "100%", height: 100 }}>
            <PickerItemsss />
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginHorizontal: 10,
            // top: 10,
            width: "95%",
            bottom: 5,
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

      <InputMini />

      <HabitMiniPicker />

      <Text style={{ fontWeight: "bold", bottom: 100, marginHorizontal: 10 }}>
        *Privacy{" "}
      </Text>
      <View>
        <Text style={{ fontWeight: "bold", marginHorizontal: 10, bottom: 30 }}>
          *How important is your habit?
        </Text>
        <View style={{ width: "100%", height: 100 }}>
          <HabitMiniPickers />
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
          bottom: 60,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Create</Text>
      </TouchableOpacity>
      {/* <Repeats /> */}
    </>
  );
}

const Tab = createMaterialTopTabNavigator();

const GoalHabits = () => {
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
export default GoalHabits;
