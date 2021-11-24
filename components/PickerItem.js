import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={Styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}
const Styles = StyleSheet.create({
  text: {
    padding: 10,
  },
});
export default PickerItem;
