import React from "react";
import { Text, StyleSheet } from "react-native";
import defaultStyle from "../components/Styles";
export default function AppText({ children, style }) {
  return <Text style={[defaultStyle.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    // fontFamily: Platform.os === "android" ? "Roboto" : "Avenir",
  },
});
