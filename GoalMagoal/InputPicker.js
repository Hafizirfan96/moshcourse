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

const InputPicker = () => {
  const [modalVisable, setModalVisable] = useState(false);

  const [value, setValue] = useState("Select An Option");

  return (
    <>
      <MenuProvider
        style={{
          width: "98%",
          borderWidth: 1,
          flex: 0.8,
          top: 5,
          // padding: 10,
          // backgroundColor: "red",
          // width: 200,
          marginHorizontal: 5,
          // height: 150,
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
              bottom: 35,
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
                // top: 20,
                width: 250,
                height: 250,
                borderWidth: 1,
                backgroundColor: "white",
                marginHorizontal: 20,
                bottom: 80,
              }}
            >
              <MenuOption
                value={"Read a book, Yoga etc"}
                text="Regpad a book, Yoga etc"
              />
              <MenuOption value={"book, .. etc"} text="Read a book, .. etc" />
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
    // padding: 20,
  },
  triggerWrapper: {
    padding: 13,
    // backgroundColor: "#f5f5f5",
  },
  triggerTouchable: {
    // underlayColor: "darkblue",
    // activeOpacity: 70,
    // padding: 20,
  },
};

export default InputPicker;
