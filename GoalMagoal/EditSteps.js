import {
  StyleSheet,
  // FlatList,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  TextInput,
  AppRegistry,
} from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import React, { Component } from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { BackgroundImage } from "react-native-elements/dist/config";

export default class EditSteps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayHolder: [],

      textInput_Holder: "kea hg fcy yt",
    };
    this.refsArray = [];
  }

  joinData = () => {
    const demeArray = this.state.arrayHolder;
    demeArray.push({
      title: this.state.textInput_Holder,
      id: Math.random() * 100,
    });

    // demeArray.push({ id: 2, name: "irfan Nawaz" });

    this.setState({ arrayHolder: demeArray });
    // this.setState({ arrayHolder: [] });
    this.setState({ textInput_Holder: "" });
  };

  handleDelete = (item, index) => {
    const filteredData = this.state.arrayHolder.filter((i) => i.id !== item.id);

    this.setState({ arrayHolder: filteredData });

    this.refsArray[index].close();
  };

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      ></View>
    );
  };

  rightSwipeActions = (item, index) => {
    return (
      <View
        style={{
          backgroundColor: "#FF5757",
          height: 50,

          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={() => this.handleDelete(item, index)}>
          <Image
            resizeMode="contain"
            source={require("../assets/delete.png")}
            style={{
              marginHorizontal: 15,
              width: 25,
              height: 25,
            }}
          />
          <Text
            style={{
              fontSize: 10,
              color: "white",
              marginHorizontal: 7,
              // padding: 2,
            }}
          >
            Remove
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderItem = ({ item, drag, isActive, index }) => {
    return (
      <TouchableOpacity
        onLongPress={drag}
        delayLongPress={-1000}
        style={
          {
            // backgroundColor: isActive ? "blue" : item.backgroundColor,
          }
        }
      >
        <Swipeable
          // ref={(ref) => {
          //   this.refsArray[index] = ref; //or this.refsArray[item.id]
          // }}
          leftThreshold={80}
          rightThreshold={40}
          friction={2}
          renderRightActions={() => this.rightSwipeActions(item, index)}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: "white",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <BackgroundImage
                style={{ width: 20, height: 20, marginVertical: 5 }}
                source={item.image}
              />
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 30,
                }}
              >
                {item.title}
              </Text>
            </View>
          </View>
        </Swipeable>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              // marginVertical: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Edit Steps
          </Text>
        </View>
        <View
          style={{
            width: 200,
            height: 50,
            // backgroundColor: "red",
            // padding: 20,
          }}
        >
          <Text style={{ marginHorizontal: 20 }}>Finish writing my book</Text>
        </View>
        <View style={{ width: "100%", height: 180, marginVertical: -30 }}>
          <DraggableFlatList
            data={this.state.arrayHolder}
            // extraData={this.state.arrayHolder}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={(item) => this.renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
            onDragEnd={({ data }) => {
              this.setState({ arrayHolder: data });
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
          }}
        >
          <Text style={{ marginHorizontal: 20, marginVertical: 15 }}>
            Add new Steps you're committed to talking:
          </Text>
        </View>
        <TextInput
          // clearButtonMode="always"
          placeholder="What's something you should do?"
          onChangeText={(data) => this.setState({ textInput_Holder: data })}
          // onChangeText={(text) => this.setState({ text })}
          // clearTextOnFocus="true"
          value={this.state.textInput_Holder}
          // enablesReturnKeyAutomatically="true"
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 15,
            width: "90%",
            borderRadius: 5,

            alignSelf: "center",
            height: 50,
            borderWidth: 1,
          }}
          underlineColorAndroid="transparent"
        />

        <TouchableOpacity
          onPress={this.joinData}
          activeOpacity={0.7}
          style={{
            justifyContent: "center",
            alignItems: "center",
            //   marginVertical: 1,
            width: "90%",
            borderRadius: 5,
            alignSelf: "center",
            height: 50,

            borderWidth: 1,
            borderColor: "#45C9F6",
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              textAlign: "center",
              color: "#45C9F6",
              fontSize: 20,
            }}
          >
            + Add Steps
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => handleSubmit()}
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 15,
            width: "90%",
            borderRadius: 5,
            alignSelf: "center",
            height: 40,

            backgroundColor: "#45C9F6",
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              textAlign: "center",
              color: "#fff",
              fontSize: 20,
              // marginTop: 4,
            }}
          >
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    // justifyContent: "center",
    // alignItems: "center",
    flex: 1,
    // margin: 2,
  },

  item: {
    padding: 10,
    fontSize: 18,
    // height: 44,
  },

  textInputStyle: {
    textAlign: "center",
    height: 40,
    width: "90%",
    borderWidth: 1,
    borderColor: "#4CAF50",
    borderRadius: 7,
    marginTop: 12,
  },

  button: {
    width: "90%",
    height: 40,
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
