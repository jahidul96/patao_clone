import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppColor } from "../utils/AppColor";
import TextComp from "./TextComp";
import ButtonComp from "./ButtonComp";

const DriverInfo = ({ driver }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: driver.img }} style={styles.imgStyle} />

      <View>
        <View style={styles.flexStyle}>
          <TextComp text={"Name : "} extraStyle={styles.labelStyle} />
          <TextComp text={driver.name} extraStyle={styles.labelStyle} />
        </View>
        <View style={styles.flexStyle}>
          <TextComp text={"Ratings : "} extraStyle={styles.labelStyle} />
          <TextComp text={driver.rating} extraStyle={styles.labelStyle} />
        </View>
        <View style={styles.flexStyle}>
          <TextComp text={"Vehicle Number : "} extraStyle={styles.labelStyle} />
          <TextComp
            text={driver.vehicleNumber}
            extraStyle={styles.labelStyle}
          />
        </View>
        <View style={styles.flexStyle}>
          <TextComp text={"Distance : "} extraStyle={styles.labelStyle} />
          <TextComp text={driver.distance} extraStyle={styles.labelStyle} />
        </View>
        <View style={styles.flexStyle}>
          <TextComp text={"Price : "} extraStyle={styles.labelStyle} />
          <TextComp text={driver.price} extraStyle={styles.labelStyle} />
        </View>
        <View style={styles.flexStyle}>
          <TextComp text={"Phone : "} extraStyle={styles.labelStyle} />
          <TextComp text={driver.phone} extraStyle={styles.labelStyle} />
        </View>

        <View>
          <ButtonComp
            text="Confirm"
            extraStyle={styles.extraBtnStyle}
            extraTextStyle={{
              fontSize: 15,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DriverInfo;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
    backgroundColor: AppColor.WHITE,
    marginBottom: 15,
    width: "100%",
    minHeight: 140,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    // alignItems: "center",
    borderRadius: 8,
  },
  profileDetails: {
    flexDirection: "row",
  },
  imgWrapper: {
    width: "30%",
  },
  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 10,
  },
  flexStyle: {
    flexDirection: "row",
    marginBottom: 5,
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: "700",
  },
  extraBtnStyle: {
    height: 33,
    width: "50%",
    borderRadius: 5,
    marginTop: 6,
  },
});
