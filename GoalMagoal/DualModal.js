import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Button,
  Keyboard,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";

import Modal from "react-native-modal";

const DualModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const [defaultStyle, setDefaultStyle] = useState(true);

  const toggleModal = () => {
    setModalVisible(false);
  };
  //   const swipeFullScreens = () => {
  //     setSwape("fullscreen");
  //   };

  return (
    <View style={styles.container}>
      <Button title={"Open Modal"} onPress={() => setModalVisible(true)} />

      <Modal
        swipeDirection="down"
        // onSwipeComplete={() => setModalVisible(false)}
        // onSwipeStart={() => setDefaultStyle(!defaultStyle)}
        onSwipe={() => setModalVisible(false)}
        isVisible={isModalVisible}
        style={{ backgroundColor: "transparent" }}
      >
        <KeyboardAvoidingView behavior={"padding"} style={styles.safeAreaView}>
          <Animatable.View
            style={
              defaultStyle
                ? styles.modalContentContainer
                : styles.modalContentContainers
            }
          >
            {/* {defaultStyle ? styles.modalContentContainers : null} */}
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
              // onPress={toggleModal}

              onPress={() => setDefaultStyle(!defaultStyle)}
            >
              <Image
                style={{
                  width: 40,
                  // backgroundColor: "#d6d6d6",
                  height: 10,
                }}
                source={require("../assets/Vector4.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleModal}>
              {/* <Image
                style={{
                  width: 40,
                  height: 12,
                  marginLeft: 330,
                }}
                source={require("../assets/download.png")}
              /> */}
            </TouchableOpacity>

            {!defaultStyle ? <Text>This is a modal</Text> : <Text></Text>}

            {/* <Text>this is old modal</Text> */}
            <TextInput placeholder="enter text" />
            <Animatable.Text animation="zoomInUp">helo man</Animatable.Text>
          </Animatable.View>
          {/* </View> */}
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // opacity: 0.5,
    backgroundColor: "#d6d6d6",
    alignItems: "center",
    paddingTop: 100,
  },
  safeAreaView: {
    flex: 1,
    position: "absolute",

    justifyContent: "flex-end",
    width: "100%",
    height: "105%",
    marginBottom: 0,
    alignItems: "center",
  },

  modalContentContainer: {
    backgroundColor: "#fff",
    width: "110%",
    height: "50%",
    borderTopStartRadius: 7,
    borderTopEndRadius: 7,
  },
  modalContentContainers: {
    backgroundColor: "#fff",
    width: "110%",
    height: "98%",
    // borderRadius: 10,
  },
});

export default DualModal;
