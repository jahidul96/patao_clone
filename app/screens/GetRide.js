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

import MapView, { Marker, AnimatedRegion } from "react-native-maps";
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
import MapViewDirections from "react-native-maps-directions";

import { GOOGLE_API_KEY } from "@env";
import TextComp from "../components/TextComp";

const GetRide = () => {
  const { userLocation } = useContext(MyLocationContext);
  const [search, setSearch] = useState(false);
  const [destination, setDestination] = useState(null);
  const [destinationName, setDestinationName] = useState("");
  const [totalDistance, setTotalDistance] = useState(0);
  const [travelTime, setTravelTime] = useState(0);
  const mapRef = useRef(null);

  console.log(userLocation);

  const toggleDestination = () => {
    setSearch(!search);
  };

  const getDestinationData = (data, details) => {
    // console.log(details);
    // console.log(data.description);
    // console.log(details.geometry.location);
    setDestinationName(data.description);
    setDestination({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    });
    setSearch(!search);
  };

  const convertMinsToHrsMins = (mins) => {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    return `${h}H : ${m}M`;
  };

  useEffect(() => {}, []);
  const zoomToLocation = () => {
    let region = {
      latitude: userLocation?.latitude,
      longitude: userLocation?.longitude,
      latitudeDelta: 5,
      longitudeDelta: 5,
    };

    let initialRegion = Object.assign({}, region);
    initialRegion["latitudeDelta"] = 0.005;
    initialRegion["longitudeDelta"] = 0.005;

    mapRef?.animateToRegion(initialRegion, 2000);
  };

  return (
    <View style={styles.container}>
      {/* back comp */}
      <PositionBackBtn />

      {/* map comp */}
      <MapView
        zoomEnabled={true}
        followsUserLocation={true}
        ref={mapRef}
        style={{
          flex: 1,
        }}
        tintColor={"red"}
        region={userLocation}
        showsUserLocation={true}
        // onMapReady={zoomToLocation}
      >
        {userLocation && (
          <Marker
            coordinate={userLocation}
            title="my place"
            description="i am here now"
            identifier="origin"
          />
        )}
        {destination && (
          <Marker
            coordinate={destination}
            title="my place"
            description="i am here now"
            identifier="destination"
          />
        )}

        {destination && userLocation && (
          <MapViewDirections
            origin={userLocation}
            destination={destination}
            apikey={GOOGLE_API_KEY}
            strokeWidth={3}
            strokeColor="black"
            onReady={(result) => {
              setTotalDistance(result.distance);
              setTravelTime(result.duration);

              // fit to screen
              mapRef?.current?.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 100,
                  bottom: 100,
                  left: 100,
                  top: 100,
                },
              });
            }}
          />
        )}
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
            {/* total distance content */}
            <View style={styles.totalDistanceContainer}>
              <TextComp text="Total Distance : " />
              <TextComp
                text={`${totalDistance} KM`}
                extraStyle={styles.extraTextStyle}
              />
            </View>
            <View style={styles.totalDistanceContainer}>
              <TextComp text="Time : " />
              <TextComp
                text={`${convertMinsToHrsMins(travelTime).slice(0, 8)}M`}
                extraStyle={styles.extraTextStyle}
              />
            </View>
            <View style={styles.totalDistanceContainer}>
              <TextComp text="Price : " />
              <TextComp
                text={`${Math.trunc(totalDistance * 15)} TK`}
                extraStyle={styles.extraTextStyle}
              />
            </View>
            <ButtonComp text={"Confirm"} />
          </View>
        ) : (
          <>
            {/* initial content */}
            {/* placeholder comp */}
            <SearchPlaceholder onPress={toggleDestination} />
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
    height: HEIGHT / 2.7,
    backgroundColor: AppColor.WHITE,
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
  totalDistanceContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  extraTextStyle: {
    color: AppColor.RED,
    marginLeft: 7,
  },
});
