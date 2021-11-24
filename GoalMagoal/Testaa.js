import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SwipeablePanel } from "rn-swipeable-panel";

export default Testaa = () => {
  useEffect(() => {
    openPanel();
  }, []);
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
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
    <View style={{ top: 20, flex: 1 }}>
      <Text>Welcome to React Native!</Text>
      <Text>To get started, edit App.js</Text>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <Text>helo</Text>
        {/* <PanelContent /> Your Content Here */}
      </SwipeablePanel>
    </View>
  );
};
