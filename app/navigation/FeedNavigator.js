import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../../components/ListingScreen";
import ListingDetails from "../../components/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Listings" component={ListingScreen} />
      <Stack.Screen name="ListingDetails" component={ListingDetails} />
    </Stack.Navigator>
  );
};
export default FeedNavigator;
