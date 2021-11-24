import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import Colors from "./Colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
  title,
  IconComponent,
  subTitle,
  image,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={Colors.primary}>
        <View style={Styles.container}>
          {IconComponent}
          {image && <Image style={Styles.image} source={image} />}
          <View>
            <View style={Styles.detailsContainer}>
              <Text style={Styles.title}>{title}</Text>
              {subTitle && <Text style={Styles.subTitle}>{subTitle}</Text>}
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};
const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: Colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 30,
  },
  title: {
    fontWeight: "600",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    marginTop: 10,
  },
  subTitle: {
    // color: Colors.medium,
    width: 150,
    // backgroundColor: "red",
    top: 5,
    height: 40,
  },
});

export default ListItem;
