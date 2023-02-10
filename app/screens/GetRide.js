import React, { useRef } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";

import MapView from "react-native-maps";
import { AppColor } from "../utils/AppColor";
import {
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "../utils/R_VectorIconExports";
import SearchPlaceholder from "../components/SearchPlaceholder";
import AddAddres from "../components/AddAddres";

const windowHeight = Dimensions.get("window").height;

const GetRide = () => {
  const ref = useRef();
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
        }}
      >
        <MapView
          style={{
            flex: 1,
          }}
        />
      </View>
      <ScrollBottomSheet // If you are using TS, that'll infer the renderItem `item` type
        componentType="ScrollView"
        snapPoints={[100, "50%", windowHeight - 250]}
        innerRef="1"
        initialSnapIndex={2}
        renderHandle={() => {
          return (
            <View style={styles.contentWrapper}>
              {/* search destination comp */}
              <View style={styles.destinationWrapper}>
                {/* placeholder comp */}
                <View style={styles.searchPlaceholderWrapper}>
                  <SearchPlaceholder />
                </View>
                {/* add btn */}
                <AddBtn />
              </View>

              {/* set initial addres */}
              <View>
                <AddAddres
                  icon={
                    <MaterialCommunityIcons
                      name="star-circle"
                      size={20}
                      color={AppColor.Black}
                    />
                  }
                  text="Home"
                  extraStyle={styles.addressExtrastyle}
                />
                <View style={styles.separetorView} />
                <AddAddres
                  icon={
                    <MaterialIcons
                      name="work"
                      size={20}
                      color={AppColor.Black}
                    />
                  }
                  text="Work"
                />
              </View>
            </View>
          );
        }}
        data={[]}
        keyExtractor={(i) => i}
        renderItem={({ item }) => {}}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const AddBtn = () => (
  <Pressable
    style={{
      width: "15%",
      height: 45,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: AppColor.GRAY,
      borderRadius: 10,
    }}
  >
    <Fontisto name="plus-a" size={18} color={AppColor.RED} />
  </Pressable>
);

export default GetRide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 16,
    backgroundColor: AppColor.WHITE,
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: AppColor.WHITE,
    minHeight: 300,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  destinationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchPlaceholderWrapper: {
    width: "80%",
  },

  addressExtrastyle: {
    width: "100%",
    marginTop: 20,
  },
  separetorView: {
    marginVertical: 10,
    width: "100%",
    borderBottomColor: AppColor.LightGray,
    borderBottomWidth: 2,
  },
});
