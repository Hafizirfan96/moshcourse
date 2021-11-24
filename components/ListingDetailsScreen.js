import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Colors from "./Colors";
import ListItem from "./ListItem";

const ListingDetailsScreen = ({ route }) => {
  const Listing = route.params;
  console.log("Listing===>", Listing);
  return (
    <View>
      <Image style={Styles.image} source={Listing.images} />
      <View style={Styles.detailContainer}>
        <Text style={Styles.title}>{Listing.title} </Text>
        <Text style={Styles.price}>{Listing.price} </Text>
        <View style={Styles.userContainer}>
          <ListItem
            image={require("../assets/irfan.jpeg")}
            title="irfan"
            subTitle="10 Listing"
          />
        </View>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  image: {
    left: 15,
    width: 350,
    height: 250,
    marginTop: 20,
    // backgroundColor: "red",
  },
  detailContainer: {
    padding: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
  price: {
    color: Colors.primary,
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: 40,
});

export default ListingDetailsScreen;
