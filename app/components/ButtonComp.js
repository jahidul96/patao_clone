import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { AppColor } from "../utils/AppColor";

const ButtonComp = ({ text, extraStyle, extraTextStyle, onPress }) => {
  return (
    <Pressable style={[styles.container, extraStyle]} onPress={onPress}>
      <Text style={[styles.text, extraTextStyle]}>{text}</Text>
    </Pressable>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColor.RED,
  },
  text: {
    color: AppColor.WHITE,
    fontWeight: "bold",
    fontSize: 17,
  },
});
