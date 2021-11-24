import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, TouchableOpacity, Text, Icon } from "react-native";

privacyOptions = [
  {
    id: 1,
    text: "Public",
    title: "Friends",
    iconName: "account",
    value: "friends",
  },
  {
    id: 2,
    text: "Only Me",
    title: "Close Friends",
    iconName: "heart",
    value: "self",
  },
  {
    id: 3,
    text: "helo",
    title: "Public",
    iconName: "earth",
    value: "public",
  },
  {
    id: 4,
    // text: "Only Me",
    title: "Private",
    iconName: "lock",
    value: "private",
  },
];

const HabitComponent = () => {
  const [selected, setSelected] = useState("");
  // state = { selected: "" };

  const _changeColor = (value) => {
    setSelected(value);
  };

  return (
    <View
      style={{
        top: 40,
        flexDirection: "row",
        // alignItems: 'center',
        justifyContent: "space-evenly",
      }}
    >
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
                left: 20,
                // width: 100,
                paddingHorizontal: 10,
                marginHorizontal: 20,
                // marginHorizontal: 3,
                backgroundColor: "white",
              }}
              key={options.title + index}
              onPress={() => {
                _changeColor(options.value);
                console.log(options.value);
              }}
              disabled={selected === options.value}
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
    </View>
  );
};

export default HabitComponent;
