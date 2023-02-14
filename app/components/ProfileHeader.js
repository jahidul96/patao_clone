import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { WIDTH } from "../utils/AppDimension";

import { userIcon } from "../utils/fileExport";
import { AppColor } from "../utils/AppColor";
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "../utils/R_VectorIconExports";
import { useSelector } from "react-redux";

const ProfileHeader = () => {
  const myAdderss = useSelector((state) => state.myLocation.myAdderss);

  return (
    <View style={styles.profileContainer}>
      {/* address comp */}
      <Pressable style={styles.addresContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Fontisto name="map-marker-alt" size={16} />
          <Text style={styles.addresTextStyle}>
            {myAdderss == null
              ? "your adders1"
              : myAdderss.length > 15
              ? myAdderss.slice(0, 15) + "..."
              : myAdderss}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={16} />
      </Pressable>

      {/* profile icon and points comp */}

      <View style={styles.profileWrapper}>
        <Pressable style={styles.pointsContainer}>
          <MaterialCommunityIcons
            name="star-circle"
            size={16}
            color={AppColor.primary}
          />
          <Text style={styles.pointText}>0 PTS</Text>
        </Pressable>
        <Pressable>
          <Image source={userIcon} style={styles.userImgStyle} />
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  profileContainer: {
    width: WIDTH,
    height: 50,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addresContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    alignItems: "center",
  },
  addresTextStyle: {
    marginHorizontal: 10,
    marginLeft: 10,
  },
  profileWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImgStyle: {
    width: 26,
    height: 26,
    marginLeft: 15,
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: AppColor.inActiveColor,
    borderRadius: 30,
  },
  pointText: {
    marginLeft: 5,
    color: AppColor.primary,
    fontWeight: "bold",
  },
});
