import React, { useState } from "react";
import { Button, Text, View, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import TimePic from "./TimePic";

function CalenderModel() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        style={{ marginRight: 5, marginLeft: 1 }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            marginTop: 150,
          }}
        >
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={toggleModal}
          >
            <Image
              style={{
                width: 40,
                height: 10,
              }}
              source={require("../assets/line.jpg")}
            />
            <Image
              style={{
                width: 40,
                height: 10,

                marginLeft: 330,
              }}
              source={require("../assets/download.png")}
            />
          </TouchableOpacity>

          <TimePic />
        </View>
      </Modal>
    </View>
  );
}

export default CalenderModel;
