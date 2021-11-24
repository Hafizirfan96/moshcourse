import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import SwipeUpDown from "react-native-swipe-up-down";
import GoalHabits from "../GoalMagoal/GoalHabits";
import ExtraRpeat from "./ExtraRpeat";

const SlidingUp = () => {
  return (
    <View style={styles.container}>
      <SwipeUpDown
        animation="easeInEaseOut"
        swipeHeight={380}
        itemMini={
          <View style={{}}>
            <GoalHabits />
          </View>
        }
        itemFull={
          <View style={{ flex: 0.6 }}>
            <ExtraRpeat />
          </View>
        }
        onShowMini={() => console.log("mini")}
        onShowFull={() => console.log("full")}
        disablePressToShow={true}
        style={{ backgroundColor: "white" }}
      />
      {/* <Text onPress={() => swipeUpDownRef.showFull()}>Show</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 200,
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
});
export default SlidingUp;
