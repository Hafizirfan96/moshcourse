import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

function Modal() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Show modal" onPress={() => setModalVisible(true)} />

      <Modal
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={() => setModalVisible(false)}
        style={{
          // flex: 1,
          // position: "absolute",
          // width: "100%",
          // height: "60%",
          marginHorizontal: 2,
          marginVertical: 1,
          // bottom: 0,
          // bottom: 0,
          // backgroundColor: "transprant",
          // top: 15,
        }}
      >
        <View
          style={{
            flex: 1,

            backgroundColor: "green",
            bottom: 0,
            position: "absolute",
            width: "100%",
            height: "50%",
            // marginVertical: 10,
          }}
        >
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

export default Modal;
