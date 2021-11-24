import React, { Component } from "react";
import { Image, View } from "react-native";

export default class Test extends Component {
  constructor() {
    super();

    this.state = {
      width: 0,
      height: 0,
    };
  }

  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Image
          source={require("../assets/imagess.jpg")}
          style={{
            width: "50%",
            height: 200,
            aspectRatio: 1,
          }}
        />
      </View>
    );
  }
}
