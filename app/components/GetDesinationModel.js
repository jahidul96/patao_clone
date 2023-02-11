import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React from "react";
import { AppColor } from "../utils/AppColor";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "../utils/R_VectorIconExports";
import PickUpAddresComp from "./PickUpAddresComp";
import AddAddres from "./AddAddres";

const GetDesinationModel = ({ setSearch, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setSearch(false)}>
        <Ionicons name="arrow-back" size={26} style={{ marginBottom: 10 }} />
      </Pressable>
      <PickUpAddresComp placeholder="Destination" onPress={onPress} />

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
          icon={<MaterialIcons name="work" size={20} color={AppColor.Black} />}
          text="Work"
        />
      </View>
      <View style={styles.separetorView} />
    </View>
  );
};

export default GetDesinationModel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.WHITE,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  destinationWrapper: {
    borderWidth: 1,
    borderColor: AppColor.GRAY,
    height: 50,
    borderRadius: 10,
    width: "100%",
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
