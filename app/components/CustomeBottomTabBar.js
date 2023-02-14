import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AppColor } from "../utils/AppColor";
import { list, menu, offer } from "../utils/fileExport";

const tabData = [
  {
    id: 1,
    name: "Offers",
    icon: offer,
  },
  {
    id: 2,
    name: "Home",
    icon: menu,
  },
  {
    id: 3,
    name: "Orders",
    icon: list,
  },
];

const CustomeBottomTabBar = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <View style={styles.bottomTabContainer}>
      {tabData.map((data) => (
        <Pressable
          key={data.id}
          style={[
            styles.itemContainer,
            data.id == selectedTab && styles.activeItemStyle,
          ]}
          onPress={() => setSelectedTab(data.id)}
        >
          <Image
            source={data.icon}
            style={[
              styles.iconStyle,
              data.id == selectedTab && { tintColor: AppColor.RED },
            ]}
          />
          <Text
            style={[
              styles.nameStyle,
              data.id == selectedTab && { color: AppColor.RED },
            ]}
          >
            {data.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default CustomeBottomTabBar;

const styles = StyleSheet.create({
  bottomTabContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: AppColor.WHITE,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
    borderRadius: 30,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "33%",
    height: 40,
    justifyContent: "center",
  },
  activeItemStyle: {
    backgroundColor: AppColor.inActiveColor,
    borderRadius: 30,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginRight: 7,
  },

  nameStyle: {
    fontSize: 16,
    fontWeight: "600",
  },
});
