import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, Modal, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import Menu, {
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

const Menue = () => {
  const [modalVisable, setModalVisable] = useState(false);

  const [value, setValue] = useState("Select An Option");

  return (
    <>
      {/* <View
        style={{
          backgroundColor: "red",
          top: 40,
          height: 100,
          borderWidth: 1,
          width: "95%",
          flex: 0.1,
          marginHorizontal: 10,
          // padding: 20,
        }}
      > */}
      <MenuProvider
        style={{
          // width:'100%',
          borderWidth: 1,
          flex: 0.06,
          top: 20,
          // padding: 10,
          // backgroundColor: "red",
          // width: 200,
          marginHorizontal: 20,
          height: 100,
          marginBottom: 20,
        }}
      >
        {/* <ScrollView style={{ maxHeight: 40 }}> */}
        <Menu
          onSelect={
            (value) => setValue(value)
            //   <Text>{value}</Text>

            // alert(`Selected number: ${value}`)
          }
        >
          <MenuTrigger text={value} customStyles={triggerStyles} style={{}} />
          <View
            style={{
              width: 20,
              marginHorizontal: 300,
              bottom: 17,
            }}
          >
            <MaterialCommunityIcons name="chevron-down" size={20} />
          </View>

          <MenuOptions
            style={{
              // flex: 1,
              // width: 100,
              height: 0,
              // top: 20,
              backgroundColor: "green",
              // marginHorizontal: 30,
            }}
          >
            <View
              style={{
                width: 300,
                height: 200,
                // backgroundColor: "green",
                marginHorizontal: 20,
              }}
            >
              <MenuOption
                value={"Read a book, Yoga etc"}
                text="Reggggggggggad a book, Yoga etc"
              />
              <MenuOption
                value={"Read a book, .. etc"}
                text="Read a book, .. etc"
              />
              <MenuOption
                value={"Read a noval, .. etc"}
                text="Read a noval, .. etc"
              />

              <MenuOption
                onSelect={() => setModalVisable(false)}
                text="Close "
              />
            </View>
          </MenuOptions>
        </Menu>
        {/* </ScrollView> */}
      </MenuProvider>
      {/* </View> */}
    </>
  );
};
const triggerStyles = {
  triggerText: {
    color: "black",
  },
  triggerWrapper: {
    padding: 5,
    // backgroundColor: "#fcfc",
  },
  triggerTouchable: {
    // underlayColor: "darkblue",
    activeOpacity: 70,
  },
  // TriggerTouchableComponent: TouchableHighlight,
};

export default Menue;
