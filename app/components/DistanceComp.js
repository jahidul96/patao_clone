import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppColor } from "../utils/AppColor";
import TextComp from "./TextComp";

const DistanceComp = ({ icon, text, extraStyle }) => {
  return (
    <View style={[styles.container, extraStyle]}>
      {icon}
      <TextComp text={text} extraStyle={styles.distanceTextStyle} />
    </View>
  );
};

export default DistanceComp;

const styles = StyleSheet.create({
  container: {
    width: "34%",
    height: 35,
    backgroundColor: AppColor.WHITE,
    position: "absolute",
    top: "50%",
    zIndex: 999,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  distanceTextStyle: {
    fontSize: 13,
    marginLeft: 5,
  },
});
