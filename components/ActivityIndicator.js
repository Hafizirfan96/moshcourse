import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

export default function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        style={{
          width: 200,
          height: 100,
          justifyContent: "center",
          left: 50,
          alignItems: "center",
        }}
        autoPlay
        loop
        source={require("../assets/animation/loader.json")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "110%",
    width: "110%",
    zIndex: 1,
    opacity: 0.8,
  },
});
