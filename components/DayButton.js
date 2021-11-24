import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import Colors from "./Colors";

function SlotButton({ day, onDaySelect, onDayUnselect }) {
  // console.log("daysssssssss", day);
  const [selected, setSelected] = useState(day.selected);
  useEffect(() => {
    selected ? onDaySelect(day.word) : onDayUnselect(day.word);
  }, [selected]);

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          selected ? setSelected(false) : setSelected(true);
        }}
      >
        <View
          style={{
            marginBottom: 50,
          }}
        >
          <View
            style={{
              height: 30,
              // marginTop: 20,
              width: 30,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: selected ? Colors.primary : "white",
              borderRadius: 5,
              borderWidth: 0.5,
              borderColor: Colors.secondary,
            }}
          ></View>
          <Text
            style={{
              // padding: 5,
              fontSize: 16,
              // fontWeight: "bold",
              color: selected ? "black" : Colors.secondary,
            }}
          >
            {day.letter}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default SlotButton;
