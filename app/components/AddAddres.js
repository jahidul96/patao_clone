import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import TextComp from "./TextComp";
import { AppColor } from "../utils/AppColor";

const AddAddres = ({ text, icon, border, extraStyle }) => {
  return (
    <Pressable style={[styles.container, extraStyle]}>
      <View style={styles.iconWrapper}>
        <Text>{icon}</Text>
      </View>
      <View style={styles.textWrapper}>
        <TextComp text={text} extraStyle={styles.textStyle} />
        <Text style={styles.placeholderText}>Set Address</Text>
      </View>
    </Pressable>
  );
};

export default AddAddres;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: AppColor.WHITE,
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper: {
    marginLeft: 10,
  },
  textStyle: {
    fontSize: 16,
    marginBottom: 3,
  },
  placeholderText: {
    color: AppColor.GRAY,
  },
});
