import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "./Colors";

function ListItemSeprator(props) {
  return <View style={Styles.separator}></View>;
}
const Styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.light,
  },
});
export default ListItemSeprator;
