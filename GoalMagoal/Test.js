import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { SwipeablePanel } from "rn-swipeable-panel";
import GoalHabits from "../GoalMagoal/GoalHabits";

const Testss = () => {
  useEffect(() => {
    openPanel();
  }, []);

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    // showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);
  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  return (
    <View style={{ flex: 0.85, top: 20 }}>
      <Text>Welcome to React Native!</Text>
      <Text>To get started, edit App.js</Text>
      <SwipeablePanel
        {...panelProps}
        fullWidth
        isActive={isPanelActive}
        onClose={closePanel}
        onPressCloseButton={closePanel}
      >
        <GoalHabits />
      </SwipeablePanel>
    </View>
  );
};
export default Testss;
