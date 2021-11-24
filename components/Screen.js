import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingLeft: 50,
    // backgroundColor: "pink",
    // paddingTop: Constant.statusBarHeight,

    flex: 1,
  },
});
export default Screen;
