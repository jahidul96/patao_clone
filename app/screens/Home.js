import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import React from "react";
import { AppColor } from "../utils/AppColor";
import ProfileHeader from "../components/ProfileHeader";
import Categorie from "../components/Categorie";
import { categories } from "../data/categoriesData";
import PaymentPlaceHolderComp from "../components/PaymentPlaceHolderComp";
import { storyData } from "../data/stroyData";
import StoryComp from "../components/StoryComp";
import TextComp from "../components/TextComp";
import AddAddres from "../components/AddAddres";
import {
  MaterialCommunityIcons,
  MaterialIcons,
} from "../utils/R_VectorIconExports";
import CustomeBottomTabBar from "../components/CustomeBottomTabBar";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AppColor.LightGray} barStyle="dark-content" />
      {/* profileheader comp */}
      <ProfileHeader />

      {/* scroll content */}
      <ScrollView>
        {/* PaymentPlaceHolderComp */}
        <View style={styles.pHorizontal}>
          <PaymentPlaceHolderComp />
        </View>
        {/* categorie comp */}
        <View style={styles.categorieContainer}>
          {categories.map((categorie) => (
            <Categorie key={categorie.id} categorie={categorie} />
          ))}
        </View>

        {/* storyc content */}
        <ScrollView
          style={styles.storyWrapper}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {storyData.reverse().map((story) => (
            <StoryComp key={story.id} story={story} />
          ))}
        </ScrollView>

        <View style={styles.takeRideContainer}>
          <TextComp text="Take a ride to" />
          <View style={styles.addAdresContainer}>
            <AddAddres
              border
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
            <AddAddres
              icon={
                <MaterialIcons name="work" size={20} color={AppColor.Black} />
              }
              text="Work"
            />
          </View>
        </View>
      </ScrollView>

      {/* bottom custom tabbar */}
      <View style={styles.bottomTabWrapper}>
        <CustomeBottomTabBar />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categorieContainer: {
    marginVertical: 10,
    marginHorizontal: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  pHorizontal: {
    paddingHorizontal: 10,
  },
  storyWrapper: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  takeRideContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  addAdresContainer: {
    paddingVertical: 15,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: AppColor.LightGray,
    marginVertical: 10,
    elevation: 2,
  },
  addressExtrastyle: {
    marginRight: 15,
    borderRightColor: AppColor.GRAY,
    borderRightWidth: 1,
  },

  // bottm tab styles
  bottomTabWrapper: {
    width: " 100%",
    height: 60,
    paddingHorizontal: 20,
    marginBottom: 10,
    position: "absolute",
    bottom: 20,
    right: 0,
  },
});
