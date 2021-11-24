import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Touchable,
  Toucha,
  TouchableWithoutFeedback,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";
import EditSteps from "./EditSteps";

function EditModal() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = (props) => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <View
        style={{
          // backgroundColor: "gray",
          // flex: 1,
          backgroundColor: "white",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button title="Show modal" onPress={toggleModal} />
      </View>

      <View>
        <Modal
          transparent
          isVisible={isModalVisible}
          animationType="slide"
          // swipeDirection="down"
          // onSwipeComplete={() => setModalVisible(false)}
          style={{
            marginRight: 0.1,
            marginLeft: 0.1,
            backgroundColor: "#d6d6d6",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              marginTop: 160,
              // marginVertical: 70,

              // height: "50%",
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

            <EditSteps />
          </View>
        </Modal>
      </View>
    </View>
  );
}
export default EditModal;
