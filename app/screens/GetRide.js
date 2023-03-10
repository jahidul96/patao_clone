import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  Image,
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
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "../utils/R_VectorIconExports";
import SearchPlaceholder from "../components/SearchPlaceholder";
import AddAddres from "../components/AddAddres";
import { MyLocationContext } from "../context/LocationContext";
import {
  PositionBackBtn,
  SelectVehical,
} from "../components/reuseable/Reuseable";
import { HEIGHT, WIDTH } from "../utils/AppDimension";
import ButtonComp from "../components/ButtonComp";
import GetDesinationModel from "../components/GetDesinationModel";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_API_KEY } from "@env";
import DistanceComp from "../components/DistanceComp";
import { bike, car, position } from "../utils/fileExport";
import { useDispatch, useSelector } from "react-redux";
import { addDestination } from "../feature/locationSlice";
import { useNavigation } from "@react-navigation/native";

const Vehicals = [
  {
    id: 1,
    img: bike,
    name: "Bike",
  },
  {
    id: 2,
    img: car,
    name: "Car",
  },
];

const GetRide = () => {
  const userLocation = useSelector((state) => state.myLocation.userLocation);
  const [search, setSearch] = useState(false);
  const [destination, setDestination] = useState(null);
  const [destinationName, setDestinationName] = useState("");
  const [totalDistance, setTotalDistance] = useState(0);
  const [travelTime, setTravelTime] = useState(0);
  const [selectVehical, setSelectVehical] = useState(1);
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const toggleDestination = () => {
    setSearch(!search);
  };

  // confirm ride

  const confirmRide = () => {
    console.log("press");
    if (!userLocation || !destination) return;
    navigation.navigate("Confirm");
  };

  const getDestinationData = (data, details) => {
    setDestinationName(data.description);
    setDestination({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
    dispatch(
      addDestination({
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      })
    );
    setSearch(!search);
  };

  const convertMinsToHrsMins = (mins) => {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    return `${h}H : ${m}M`;
  };

  // zoom user current location the location
  const zoomToLocation = () => {
    let region = {
      latitude: userLocation?.latitude,
      longitude: userLocation?.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    };

    mapRef?.current?.animateToRegion(region, 5000);
  };

  useEffect(() => {
    zoomToLocation();
  }, []);

  return (
    <View style={styles.container}>
      {/* back comp */}
      <PositionBackBtn />

      {/* distance show */}
      {destination && (
        <DistanceComp
          text={`${totalDistance} KM`}
          icon={<MaterialCommunityIcons name="map-marker-distance" size={20} />}
          extraStyle={{ top: "10%", right: 0 }}
        />
      )}

      {/* travel time show */}
      {destination && (
        <DistanceComp
          text={`${convertMinsToHrsMins(travelTime).slice(0, 8)}M`}
          icon={<Ionicons name="time" size={20} />}
          extraStyle={{ left: 0 }}
        />
      )}

      {/* map comp */}
      <MapView
        zoomEnabled={true}
        followsUserLocation={true}
        // minZoomLevel={10}
        ref={mapRef}
        style={{
          flex: 1,
        }}
        tintColor={"black"}
        initialRegion={userLocation}
        // region={userLocation}
        showsUserLocation={true}
      >
        {userLocation && (
          <Marker.Animated
            pinColor={"red"}
            coordinate={userLocation}
            title="my place"
            description="i am here now"
            identifier="origin"
            // image={position}
          >
            {/* <Image
              source={position}
              style={{ width: 15, height: 15,  }}
            /> */}
          </Marker.Animated>
        )}
        {destination && (
          <Marker.Animated
            coordinate={destination}
            title="my destination"
            description="destination"
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
      <View
        style={[
          styles.bottomContainer,
          destination && { height: HEIGHT / 3.2 },
        ]}
      >
        {destination ? (
          <>
            {/* car/bike select */}
            <View style={styles.vehicalSelectWrapper}>
              {Vehicals.map((vehical) => (
                <SelectVehical
                  key={vehical.id}
                  vehicalDetails={vehical}
                  selectVehical={selectVehical}
                  onPress={() => setSelectVehical(vehical.id)}
                  price={
                    vehical.name == "Bike"
                      ? totalDistance > 100
                        ? `${Math.trunc(totalDistance * 8)} TK`
                        : `${Math.trunc(totalDistance * 15)} TK`
                      : totalDistance > 50
                      ? `${Math.trunc(totalDistance * 20)} TK`
                      : `${Math.trunc(totalDistance * 30)} TK`
                  }
                />
              ))}
            </View>

            <SearchPlaceholder
              onPress={toggleDestination}
              text={destinationName}
            />
            <View style={{ marginVertical: 7 }} />

            <ButtonComp text={"Confirm"} onPress={confirmRide} />
          </>
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
    height: HEIGHT / 3.4,
    backgroundColor: AppColor.WHITE,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 10,
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

  distanceTextStyle: {
    fontSize: 13,
    marginLeft: 5,
  },
  vehicalSelectWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -10,
  },
});
