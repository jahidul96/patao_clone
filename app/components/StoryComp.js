import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { AppColor } from "../utils/AppColor";
import { WIDTH } from "../utils/AppDimension";

const StoryComp = ({ story }) => {
  return (
    <Pressable style={styles.container}>
      <Image source={story.img} style={styles.imgStyle} />
      <Text>not working</Text>
    </Pressable>
  );
};

export default StoryComp;

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 4.8,
    height: WIDTH / 4.8,
    borderRadius: 100,
    backgroundColor: AppColor.RED,
    marginRight: 10,
    borderWidth: 3,
    borderColor: AppColor.Black,
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
});
