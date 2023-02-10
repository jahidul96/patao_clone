import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { HEIGHT, WIDTH } from "../utils/AppDimension";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import PickUpAddresComp from "../components/PickUpAddresComp";

const GetRide = () => {
  return (
    <View style={styles.container}>
      {/* <StatusBar
        backgroundColor={"transparent"}
        barStyle="dark-content"
        hidden={true}
      /> */}
      {/* mapContainer */}
      {/* <View style={styles.mapWraper}>
        <MapView style={styles.mapContainer} />
      </View> */}

      <ScrollView>
        <PickUpAddresComp placeholder={"destination"} />
      </ScrollView>
    </View>
  );
};

export default GetRide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapWraper: {
    width: WIDTH,
    height: HEIGHT / 1.8,
  },
  mapContainer: {
    flex: 1,
  },
});
