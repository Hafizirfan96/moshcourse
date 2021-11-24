import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../components/Colors";
import { Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { useEffect } from "react";
import { useState } from "react";

export default function ImageInput({ imageUri, onChangeImage }) {
  // console.log("this is imageuri12121", imageUris);
  // const [imageUri, setImageUri] = useState();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you shure you want to delete this image", [
        { text: "yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("error reading an image", error);
    }

    console.log(result);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            Colors={Colors.medium}
            size={40}
          />
        )}
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={styles.image}
            // resizeMode="contain"
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.light,
    borderRadius: 15,
    height: 80,
    width: 80,
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    // width: 200,
    // height: 200,
    width: "100%",
    height: "100%",
  },
});
