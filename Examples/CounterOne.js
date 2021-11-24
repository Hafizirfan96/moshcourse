import React, { useReducer } from "react";
import { View, TouchableOpacity, Text } from "react-native";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <View style={{}}>
        <Text style={{ fontSize: 20 }}>count -{count}</Text>
      </View>
      <TouchableOpacity onPress={() => dispatch("increment")}>
        <Text style={{ fontSize: 20, color: "red" }}>increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch("decrement")}>
        <Text style={{ fontSize: 20, color: "pink" }}>decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch("reset")}>
        <Text style={{ fontSize: 20, color: "green" }}>reset</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CounterOne;
