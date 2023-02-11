import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";

import MapView, { Marker } from "react-native-maps";
import { AppColor } from "../utils/AppColor";
import {
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "../utils/R_VectorIconExports";
import SearchPlaceholder from "../components/SearchPlaceholder";
import AddAddres from "../components/AddAddres";
import { MyLocationContext } from "../context/LocationContext";
import { PositionBackBtn } from "../components/reuseable/Reuseable";
import { HEIGHT } from "../utils/AppDimension";
import PickUpAddresComp from "../components/PickUpAddresComp";

const GetRide = () => {
  const { userLocation } = useContext(MyLocationContext);
  const [search, setSearch] = useState(false);
  const sheetRef = useRef();
  const [points, setPoints] = useState(1);

  const toggleDestination = () => {
    setSearch(!search);
  };

  // console.log(points);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
        }}
      >
        {/* back comp */}
        <PositionBackBtn />

        {/* map comp */}
        <MapView
          style={{
            flex: 1,
          }}
          tintColor={"red"}
          region={userLocation}
          showsUserLocation={true}
        >
          <Marker
            coordinate={userLocation}
            title="my place"
            description="i am here now"
          />
        </MapView>
      </View>
      <ScrollBottomSheet
        componentType="ScrollView"
        snapPoints={[0, HEIGHT - 300]}
        ref={sheetRef}
        onSettle={(index) => {
          setPoints(index);
        }}
        innerRef="1"
        initialSnapIndex={search ? 0 : 1}
        renderHandle={() => {
          return (
            <View
              style={[
                styles.contentWrapper,
                points == 0 && {
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                },
              ]}
            >
              {/* search destination comp */}
              <View style={styles.destinationWrapper}>
                {/* placeholder comp */}
                <View style={styles.searchPlaceholderWrapper}>
                  <SearchPlaceholder onPress={toggleDestination} />
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

              {/*  */}
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
