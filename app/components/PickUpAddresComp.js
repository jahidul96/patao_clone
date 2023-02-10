import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { AppColor } from "../utils/AppColor";
import { GOOGLE_API_KEY } from "@env";

const PickUpAddresComp = ({ placeholder, onPress }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        onPress={(data, details = null) => onPress(details)}
        styles={{
          container: {},
        }}
        fetchDetails={true}
        query={{
          key: GOOGLE_API_KEY,
          language: "en",
        }}
      />
    </View>
  );
};

export default PickUpAddresComp;

const styles = StyleSheet.create({});
