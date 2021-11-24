import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Button } from "react-native";

export default function Profile() {
  const { name, age, status } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const updateAge = (age) => {
    console.log("helo", age);
    dispatch({ type: "UPDATE_AGE", payload: age });
  };
  const updatename = (name) => {
    dispatch({ type: "UPDATE_NAME", payload: name });
  };
  return (
    <View style={{ marginVertical: 50 }}>
      <Text>helo this is profile</Text>
      <Text>my name is {name}</Text>
      <Text>{age}</Text>
      <Text>{status}</Text>
      <Button title="update age" onPress={() => updateAge(30)} />
      <Button title="update name" onPress={() => updatename("usman")} />
    </View>
  );
}
