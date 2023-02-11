import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { AppColor } from "../utils/AppColor";
import { Fontisto } from "../utils/R_VectorIconExports";

const SearchPlaceholder = ({ onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Fontisto name="map-marker-alt" size={16} color={AppColor.RED} />
      <Text style={styles.text}>Search Destination</Text>
    </Pressable>
  );
};

export default SearchPlaceholder;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: AppColor.GRAY,
    backgroundColor: AppColor.WHITE,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
  },
});
