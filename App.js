import React, { useState, useEffect } from "react";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

import AuthContext from "./app/auth/Context";
import authStorage from "./app/auth/Storage";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState();
  const { isReady, setIsReady } = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    console.log("this is token", user);
    if (user) setUser(user);
  };

  if (!isReady)
    <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />;
  // useEffect(() => {
  //   restoreToken();
  // }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
