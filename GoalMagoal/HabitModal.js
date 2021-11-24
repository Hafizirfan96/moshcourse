import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  platform,
  Button,
  Modal,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../components/Styles";
import AppText from "../components/AppText";
import { TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import Screen from "../components/Screen";
import { FlatList } from "react-native";
import PickerItem from "../components/PickerItem";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

const HabitModal = ({
  icon,
  items,
  onSelectItem,
  selectedItem,
  placeholder,
  // PickerItem,

  label,
  onPress,
}) => {
  const [modalVisable, setModalVisable] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
        <View style={styles.container}>
          {/* {icon && (
              <MaterialCommunityIcons
                name={icon}
                size={20}
                color={defaultStyles.Colors}
                style={styles.icon}
              />
            )} */}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          {/* <MaterialCommunityIcons
            style={{ padding: 10 }}
            name="chevron-down"
            size={20}
          /> */}
        </View>
      </TouchableWithoutFeedback>

      {/* </View> */}

      <Modal visible={modalVisable} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModalVisable(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setModalVisable(false);
                  onSelectItem(item);
                  console.log(item);
                }}
              >
                <AppText style={styles.text}>{item.label}</AppText>
              </TouchableOpacity>
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: defaultStyles.Colors.light,
    // borderRadius: 25,
    // flexDirection: "row",
    // width: 150,
    // padding: 11,
    // marginVertical: 10,
  },

  icon: {
    // marginRight: 10,
    marginVertical: 10,
    marginLeft: 10,
    // padding: 10,
  },

  placeholder: {
    // color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    // backgroundColor: "green",
    width: "100%",
    height: 20,
    flex: 1,
    padding: 15,
  },
});
export default HabitModal;
