import React, { Component } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { View, Image, Text, StyleSheet } from "react-native";

const Card = ({ title, subTitle, imageUrl, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={Styles.card}>
        <Image style={Styles.image} source={{ uri: imageUrl }} />
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const Styles = StyleSheet.create({
  card: {
    overflow: "hidden",
  },
  detailsContainer: {},
  subTitle: {
    color: "red",
    fontSize: 20,
    left: 10,
  },
  title: {
    left: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },

  image: {
    marginHorizontal: 10,
    width: "95%",
    height: 250,
    borderRadius: 15,
  },
});
export default Card;
