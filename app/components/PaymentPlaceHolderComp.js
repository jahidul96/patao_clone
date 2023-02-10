import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import React from "react";
import { payLogo } from "../utils/fileExport";
import { AppColor } from "../utils/AppColor";
import { Ionicons } from "../utils/R_VectorIconExports";
import { useNavigation } from "@react-navigation/native";

const PaymentPlaceHolderComp = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.container}>
      <View>
        <Image source={payLogo} style={styles.payIconStyle} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Pay Smarter,</Text>
        <Text style={styles.textStyle}> Pay Later </Text>
        <Ionicons name="chevron-forward" size={16} color={AppColor.WHITE} />
      </View>
    </Pressable>
  );
};

export default PaymentPlaceHolderComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 45,
    backgroundColor: "#00337C",
    borderRadius: 13,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  payIconStyle: {
    width: 30,
    height: 30,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    color: AppColor.WHITE,
    fontSize: 12,
    marginBottom: 3,
  },
});
