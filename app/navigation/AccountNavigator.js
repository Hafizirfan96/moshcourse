import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../../components/AccountScreen";
import MessageScreen from "../../components/MessageScreen";
const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen
        name="Messages"
        component={MessageScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default AccountNavigator;
