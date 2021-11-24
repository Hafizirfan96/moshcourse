import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "./Screen";
import Card from "./Card";
import Colors from "./Colors";
import ListingsApi from "../api/Listing";
import AppText from "./AppText";
import AppButton from "./AppButton";
// import { ActivityIndicator } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import UseApi from "../hooks/UseApi";

export default function ListingScreen({ navigation }) {
  const getListingsApi = UseApi(ListingsApi.getListings);

  useEffect(() => {
    getListingsApi.request(1, 2, 3);
  }, []);

  return (
    <Screen style={Styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText> could't retrive the listings</AppText>
          <AppButton title="Retry" onPress={getListingsApi.loading} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => {
          // console.log("item==>", item.images[0].url);

          return (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate("ListingDetails", item)}
            />
          );
        }}
      />
    </Screen>
  );
}
const Styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.light,
  },
});
