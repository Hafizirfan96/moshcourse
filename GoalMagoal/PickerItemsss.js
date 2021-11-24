import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import Styles from "../components/Styles";

const privacyOptions = [
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
  {
    id: 7,
    // text: "Only Me",
    title: "7",
    value: "7",
  },
  {
    id: 8,
    // text: "Only Me",
    title: "8",
    value: "8",
  },
  {
    id: 9,
    // text: "Only Me",
    title: "9",
    value: "9",
  },
];

const PickerItemsss = () => {
  const [selected, setSelected] = useState("");

  const changeColor = (value) => {
    setSelected(value);
  };

  return (
    <View
      style={{
        top: 45,
        // backgroundColor: "red",
        flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "space-evenly",
      }}
    >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {privacyOptions.map((options, index) => {
          return (
            <>
              <TouchableOpacity
                style={{
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  borderColor:
                    selected === options.value ? "#828282" : "lightgray",
                  borderWidth: 1,
                  borderRadius: 20,
                  paddingHorizontal: 15,
                  marginHorizontal: 10,
                }}
                key={options.title + index}
                onPress={() => {
                  changeColor(options.value);
                  console.log(options.value);
                }}
                disabled={selected === options.value}
              >
                <Text
                  style={{
                    // padding: 10,
                    // marginHorizontal: 10,
                    fontFamily: "bold",
                    fontSize: 14,
                    color: "#828282",
                    opacity: selected === options.value ? 1 : 0.3,
                  }}
                >
                  {options.title}
                </Text>
              </TouchableOpacity>
            </>
          );
        })}
      </ScrollView>
    </View>
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

export default PickerItemsss;
