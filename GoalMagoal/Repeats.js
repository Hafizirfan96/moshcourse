import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, Modal, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import Menu, {
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

const Repeats = () => {
  const [modalVisable, setModalVisable] = useState(false);

  const [value, setValue] = useState("Units");
  const [values, setValues] = useState("Day");

  return (
    <View style={{ flexDirection: "row", top: 10 }}>
      <TouchableOpacity
        style={{
          // top: 10,
          marginHorizontal: 10,
          width: 40,
          height: 40,
          borderWidth: 1,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </TouchableOpacity>
      <MenuProvider
        style={{
          borderWidth: 1,
          flex: 1,

          width: 140,
          // height: 40,
          borderWidth: 1,
          borderRadius: 5,
          // marginHorizontal: 9,

          // marginBottom: 20,
        }}
      >
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
              marginHorizontal: 110,
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
                top: 20,
                width: 200,
                height: 120,
                backgroundColor: "green",
                // marginHorizontal: 20,
                bottom: 130,
              }}
            >
              <MenuOption value={"Read a book, "} text="Rgggggad " />
              <MenuOption value={"Read  etc"} text="Read a " />
              <MenuOption value={"Read a novaletc"} text="Read  c" />

              <MenuOption
                onSelect={() => setModalVisable(false)}
                text="Close "
              />
            </View>
          </MenuOptions>
        </Menu>
      </MenuProvider>
      <Text style={{ top: 10, marginHorizontal: 8, left: 10 }}>every</Text>
      <MenuProvider
        style={{
          borderWidth: 1,
          flex: 1,
          borderRadius: 5,

          width: 120,
        }}
      >
        <Menu
          onSelect={
            (values) => setValues(values)
            //   <Text>{value}</Text>

            // alert(`Selected number: ${value}`)
          }
        >
          <MenuTrigger text={values} customStyles={triggerStyles} style={{}} />
          <View
            style={{
              width: 20,
              marginHorizontal: 90,
              bottom: 35,
            }}
          >
            <MaterialCommunityIcons name="chevron-down" size={20} />
          </View>

          <MenuOptions
            style={{
              height: 0,

              backgroundColor: "green",
            }}
          >
            <View
              style={{
                // flex: 0.1,
                // top: 20,
                width: 120,
                height: 110,
                backgroundColor: "green",
                // right: 20,
                left: 20,
                bottom: 110,
              }}
            >
              <MenuOption
                values={"Read a book, Yoga etc"}
                text="Reggggggggggad a book, Yoga etc"
              />
              <MenuOption
                values={"Read a book, .. etc"}
                text="Read a book, .. etc"
              />
              <MenuOption
                valus={"Read a noval, .. etc"}
                text="Read a noval, .. etc"
              />

              <MenuOption
                onSelect={() => setModalVisable(false)}
                text="Close "
              />
            </View>
          </MenuOptions>
        </Menu>
      </MenuProvider>
    </View>
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

export default Repeats;
