import React, { useContext } from "react";
import Icon from "./Icon";
import ListItem from "./ListItem";
import Screen from "./Screen";
import { StyleSheet, FlatList, View } from "react-native";
import Colors from "./Colors";
import ListItemSeprator from "./ListItemSeprator";
import AuthContext from "../app/auth/Context";
import authStorage from "../app/auth/Storage";
import UseAuth from "../app/auth/UseAuth";

const menuItem = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: Colors.primary,
    },
  },
  {
    title: "My Message",
    icon: {
      name: "email",
      backgroundColor: Colors.secondary,
    },
    targetScreen: "Messages",
  },
];

export default function AccountScreen({ navigation }) {
  const { user, logOut } = UseAuth();

  return (
    <Screen style={styles.scree}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/unnamed.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeprator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: Colors.light,
  },
});
