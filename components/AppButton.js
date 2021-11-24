import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { colors } from "react-native-elements";
import Colors from "./Colors";
export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={Styles.button} onPress={onPress}>
      <View>
        <Text style={Styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
const Styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
