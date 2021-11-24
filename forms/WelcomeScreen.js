import React from "react";
import AppButton from "../components/AppButton";
import { useFormikContext } from "formik";
import { View, Image } from "react-native";

export default function WelcomeScreen({ navigation }) {
  //   const { handleSubmit } = useFormikContext();
  return (
    <View style={{ flex: 1, marginVertical: 50 }}>
      <View style={{}}>
        <Image
          source={require("../images/zeikh.png")}
          style={{ marginHorizontal: 90 }}
        />
      </View>

      <View style={{ marginVertical: 20 }}>
        <AppButton title="login" onPress={() => navigation.navigate("Login")} />
      </View>
      <View style={{}}>
        <AppButton
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
}
