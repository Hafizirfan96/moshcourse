import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../components/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={Colors.white}
          size={30}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 40,
    height: 40,
    width: 40,
    // padding: 2.5,
    top: 5,
    borderColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
