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
import Colors from "./Colors";
import defaultStyles from "../components/Styles";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import Screen from "./Screen";
import { FlatList } from "react-native";

import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  items,
  onSelectItem,
  selectedItem,
  PickerItemComponent = PickerItem,
  placeholder,
}) => {
  const [modalVisable, setModalVisable] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.Colors}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.Colors}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisable} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModalVisable(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisable(false);
                  onSelectItem(item);
                }}
              />
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
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
  placeholder: {
    // color: defaultStyles.colors.medium,
    // flex: 1,
  },
  text: {
    // flex: 1,
  },
});
export default AppPicker;
