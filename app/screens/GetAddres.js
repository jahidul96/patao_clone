import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import React from "react";
import { AppColor } from "../utils/AppColor";
import PickUpAddresComp from "../components/PickUpAddresComp";

const GetAddres = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"red"} />

      {/* header */}
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Home</Text>
      </View>

      <ScrollView keyboardShouldPersistTaps="always" nestedScrollEnabled={true}>
        <PickUpAddresComp placeholder="Your Location" />
        <PickUpAddresComp placeholder="Destination" />
      </ScrollView>
    </View>
  );
};

export default GetAddres;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.GRAY,
  },
  headerContainer: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 15,
    backgroundColor: AppColor.RED,
  },
  titleText: {
    color: AppColor.WHITE,
    fontSize: 19,
    fontWeight: "bold",
  },
});
