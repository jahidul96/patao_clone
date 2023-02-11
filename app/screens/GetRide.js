import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  Modal,
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
import { HEIGHT, WIDTH } from "../utils/AppDimension";
import ButtonComp from "../components/ButtonComp";
import GetDesinationModel from "../components/GetDesinationModel";

const GetRide = () => {
  const { userLocation } = useContext(MyLocationContext);
  const [search, setSearch] = useState(false);
  const [destination, setDestination] = useState(false);
  const [destinationName, setDestinationName] = useState("");

  const toggleDestination = () => {
    setSearch(!search);
  };

  // console.log(points);

  const getDestinationData = (data, details) => {
    // console.log(details);
    console.log(data.description);
    console.log(details.geometry.location);
    setDestinationName(data.description);
    setDestination({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.4235,
    });
  };

  return (
    <View style={styles.container}>
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

      {/* bottom content */}
      <View style={styles.bottomContainer}>
        {destination ? (
          <View>
            <SearchPlaceholder
              onPress={toggleDestination}
              text={destinationName}
            />
            <View style={{ marginVertical: 7 }} />
            <ButtonComp text={"Confirm"} />
          </View>
        ) : (
          <>
            {/* initial content */}
            <View style={styles.destinationWrapper}>
              {/* placeholder comp */}
              <SearchPlaceholder onPress={toggleDestination} />
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
                  <MaterialIcons name="work" size={20} color={AppColor.Black} />
                }
                text="Work"
              />
            </View>
          </>
        )}
      </View>

      {/* modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={search}
        onRequestClose={() => {
          setSearch(!search);
        }}
        style={{
          flex: 1,
        }}
      >
        <GetDesinationModel
          setSearch={setSearch}
          onPress={getDestinationData}
        />
      </Modal>
    </View>
  );
};

export default GetRide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // bottom content style
  bottomContainer: {
    width: WIDTH,
    height: HEIGHT / 3.2,
    backgroundColor: AppColor.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    paddingHorizontal: 10,
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
