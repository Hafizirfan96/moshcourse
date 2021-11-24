import { DefaultTheme } from "@react-navigation/native";
import color from "color";
import colors from "../../components/Colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
