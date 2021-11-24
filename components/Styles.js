import { Platform } from "react-native";
import Colors from "./Colors";

export default {
  // Color: {},
  text: {
    width: "40%",
    Color: Colors.dark,
    fontSize: 15,
    fontFamily: Platform.os === "android" ? "Roboto" : "Avenir",
  },
};
