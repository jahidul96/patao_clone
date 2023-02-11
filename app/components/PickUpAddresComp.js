import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { AppColor } from "../utils/AppColor";
import { GOOGLE_API_KEY } from "@env";
import { WIDTH } from "../utils/AppDimension";
import { Fontisto } from "../utils/R_VectorIconExports";

const PickUpAddresComp = ({ placeholder, onPress }) => {
  return (
    <GooglePlacesAutocomplete
      renderLeftButton={() => (
        <Fontisto
          name="map-marker-alt"
          size={16}
          color={AppColor.RED}
          style={{
            paddingTop: 14,
          }}
        />
      )}
      enablePoweredByContainer={false}
      placeholder={placeholder}
      onPress={(data, details = null) => onPress(details)}
      styles={{
        container: styles.container,
        listView: {},
      }}
      fetchDetails={true}
      query={{
        key: GOOGLE_API_KEY,
        language: "en",
      }}
    />
  );
};

export default PickUpAddresComp;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: AppColor.GRAY,
    borderRadius: 10,
  },
});
