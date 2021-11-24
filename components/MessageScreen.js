import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import ListItem from "./ListItem";
import ListItemDeleteAction from "./ListItemDeleteAction";
import Colors from "./Colors";
import ListItemSeprator from "./ListItemSeprator";
import Screen from "./Screen";
const initialmessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/imagess.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/imagess.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/imagess.jpg"),
  },
];

const MessageScreen = (props) => {
  const [messages, setMessages] = useState(initialmessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => {
          message.id;
        }}
        renderItem={({ item }) => item.id}
        renderItem={({ item }) => (
          <ListItem
            key={item}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeprator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "T1",
              description: "D1",
              image: require("../assets/imagess.jpg"),
            },
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/imagess.jpg"),
            },
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/imagess.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};
export default MessageScreen;
