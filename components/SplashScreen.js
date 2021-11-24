import React from "react";
// import React, {Component} from 'react';
import { View, StyleSheet, Image, Text } from "react-native";
import { useEffect } from "react/cjs/react.development";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    data();
    setTimeout(() => {
      // navigation.push("SignUp");
    }, 5000);
  }, []);

  const data = async () => {
    try {
      const data = await AsyncStorage.getItem("token");
      console.log("data token", data);
      if (data != null) {
        navigation.push("Image");
      }
    } catch (e) {
      navigation.push("SignUp");
    }
  };

  return (
    <View
      style={{
        backgroundColor: "dodgerblue",
        flex: 1,
      }}
    >
      <Text style={styles.splash}>Believe In YourSelf</Text>
      <Text style={{ textAlign: "center", color: "white" }}>
        Message From Your Future Self
      </Text>
      <View style={{ position: "center", padding: 100 }}>
        <Image
          resizeMode="contain"
          style={{ width: 160, height: 170, marginTop: 20, margin: "auto" }}
          // source={require("../assets/loading-buffering.gif")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  splash: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 70,
    fontWeight: "bold",
    color: "white",
  },
});
export default SplashScreen;
