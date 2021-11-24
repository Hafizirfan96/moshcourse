import React from "react";

import AppText from "../components/AppText";
import { StyleSheet } from "react-native";

export default function ErrorMessage({ error, visable }) {
  if (!visable || !error) return null;
  return <AppText style={Styles.error}>{error}</AppText>;
}
const Styles = StyleSheet.create({
  error: {
    color: "red",
    width: "100%",
  },
});
