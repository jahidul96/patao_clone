import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { AppColor } from "../utils/AppColor";
import PickUpAddresComp from "../components/PickUpAddresComp";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const Home = () => {
  const [myLocation, setMyLocation] = useState({
    latitude: 22.3569,
    longitude: 91.7832,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.4235,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        console.log("not granted permision");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setMyLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.4235,
      });
    })();
  }, []);

  const changeMyLocation = (details) => {
    console.log(details.geometry.location);
    setMyLocation({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.4235,
    });
  };

  const onRegionChange = (region) => {
    // console.log(region);
    setMyLocation({
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
    });
  };

  // for screen fit map direction
  useEffect(() => {
    mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: {
        top: 50,
        left: 50,
        right: 50,
        bottom: 50,
      },
    });
  }, [origin, destination]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"red"} />

      {/* header */}
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Home</Text>
      </View>

      <ScrollView keyboardShouldPersistTaps="always" nestedScrollEnabled={true}>
        <PickUpAddresComp
          placeholder="Your Location"
          onPress={changeMyLocation}
        />
        <PickUpAddresComp placeholder="Destination" />
        <View
          style={{
            width: "100%",
            height: 200,
          }}
        >
          <MapView
            style={{
              width: " 100%",
              height: "100%",
            }}
            tintColor={"red"}
            // initialRegion={initialRegion}
            region={myLocation}
            showsUserLocation={true}
            onRegionChangeComplete={onRegionChange}
          >
            <Marker
              coordinate={myLocation}
              title="this is a marker"
              description="this is a marker example"
            />
          </MapView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

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
