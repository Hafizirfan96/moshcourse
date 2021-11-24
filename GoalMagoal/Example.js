import ActionSheet from "react-native-actions-sheet";
import React, { createRef } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { TextInput } from "react-native";
const actionSheetRef = createRef();

const Example = () => {
  // const actionSheetRef = useRef();
  const handleChange = () => {
    return (
      <View style={{ flex: 1 }}>
        <Text>helo man</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          actionSheetRef.current?.setModalVisible();
        }}
      >
        <Text>Open ActionSheet</Text>
      </TouchableOpacity>

      <ActionSheet ref={actionSheetRef}>
        <ScrollView
          nestedScrollEnabled={true}
          onMomentumScrollEnd={() =>
            actionSheetRef.current?.handleChildScrollEnd()
          }
        />
      </ActionSheet>
    </View>
  );
};

export default Example;
