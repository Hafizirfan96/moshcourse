import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

const privacyOptionss = [
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
  {
    id: 5,
    // text: "Only Me",
    title: "Privatee",
    iconName: "lock",
    value: "privatee",
  },
];

const PickerItemss = () => {
  const [selected, setSelected] = useState("");
  // state = { selected: "" };

  const _changeColors = (value) => {
    setSelected(value);
  };

  return (
    <View
      style={{
        // bottom: 30,
        top: 12,
        // backgroundColor: "red",
        flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "space-evenly",
      }}
    >
      {/* <ScrollView>
        <FlatList
          horizontal={true}
          data={privacyOptions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView> */}

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {privacyOptionss.map((options, index) => {
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
                  paddingHorizontal: 10,
                  marginHorizontal: 5,
                }}
                key={options.title + index}
                onPress={() => {
                  _changeColors(options.value);
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
      </ScrollView>
    </View>
  );
};

export default PickerItemss;
