import React from "react";
import { View, TextInput, StyleSheet, platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "./Colors";
import defaultStyles from "../components/Styles";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.Colors}
          style={styles.icon}
        />
      )}
      <TextInput
        // placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: defaultStyles.Colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
});
