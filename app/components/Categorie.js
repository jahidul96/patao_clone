import { Image, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { WIDTH } from "../utils/AppDimension";
import { AppColor } from "../utils/AppColor";

const Categorie = ({ categorie }) => {
  return (
    <Pressable
      style={[
        styles.itemStyle,
        categorie.more && {
          borderWidth: 1,
          borderColor: AppColor.RED,
        },
      ]}
    >
      <Image source={categorie.icon} style={styles.iconStyle} />
      <Text style={styles.name}>{categorie.name}</Text>
    </Pressable>
  );
};

export default Categorie;

const styles = StyleSheet.create({
  itemStyle: {
    width: WIDTH / 4.9,
    height: 80,
    borderRadius: 10,
    backgroundColor: AppColor.WHITE,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 13,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  name: {
    marginTop: 7,
    color: "#333",
    fontSize: 13,
  },
});
