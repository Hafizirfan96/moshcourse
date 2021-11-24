import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Styles from "../components/Styles";
import HabitComponent from "./HabitComponent";

const privacyOption = [
  {
    id: 1,
    title: "1",
    value: "1",
  },
  {
    id: 2,

    title: " 2",

    value: "2",
  },
  {
    id: 3,

    title: "3",

    value: "3",
  },
  {
    id: 4,
    // text: "Only Me",
    title: "4",
    value: "4",
  },
  {
    id: 5,
    // text: "Only Me",
    title: "5",
    value: "5",
  },
  {
    id: 6,
    // text: "Only Me",
    title: "6",
    value: "6",
  },
];

const HabitComponents = () => {
  const [selected, setSelected] = useState("");

  const changeColor = (value) => {
    setSelected(value);
  };

  return (
    <ScrollView>
      <View
        style={{
          top: 40,
          flexDirection: "row",
          // alignItems: 'center',
          justifyContent: "space-evenly",
        }}
      >
        {privacyOption.map((options, index) => {
          return (
            <>
              <TouchableOpacity
                key={options.title + index}
                onPress={() => {
                  changeColor(options.value);
                  console.log(options.value);
                }}
                disabled={selected === options.value}
              >
                <View
                  style={{
                    height: 50,

                    justifyContent: "center",
                    alignItems: "center",

                    flexDirection: "row",
                    borderColor:
                      selected === options.value ? "#828282" : "lightgray",
                    borderWidth: 1,
                    borderRadius: 30,
                    width: 50,
                    backgroundColor: "white",
                  }}
                >
                  <MaterialCommunityIcons
                    pack="material-community"
                    name={options.iconName}
                    style={{
                      height: 15,
                      width: 15,
                      tintColor: "#828282",
                      opacity: selected === options.value ? 1 : 0.3,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "bold",
                      fontSize: 14,
                      right: 8,
                      color: "#828282",
                      opacity: selected === options.value ? 1 : 0.3,
                    }}
                  >
                    {options.title}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          );
        })}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollview: {
    width: "100%",
    height: 100,
    padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    // justifyContent: "space-evenly",
    // justifyContent: "center",
  },
});

export default HabitComponents;
