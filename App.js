import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Location from "expo-location";

import GetRide from "./app/screens/GetRide";
import Home from "./app/screens/Home";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { MyLocationContext } from "./app/context/LocationContext";
import { useEffect, useState } from "react";
import Info from "./app/screens/Info";
import Confirm from "./app/screens/Confirm";
import { Provider, useDispatch } from "react-redux";
import { addAddress, addUserLocation } from "./app/feature/locationSlice";
import { store } from "./app/feature/store";

const Stack = createNativeStackNavigator();

const AppWrapper = () => {
  const dispatch = useDispatch();

  // getting user location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        console.log("not granted permision");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      const address = await Location.reverseGeocodeAsync(location.coords);

      // console.log(address[0].district);

      dispatch(addAddress(address[0].district));
      dispatch(
        addUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        })
      );
    })();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={gestureHandlerRootHOC(Home)} />
        <Stack.Screen
          name="GetRide"
          component={gestureHandlerRootHOC(GetRide)}
        />
        <Stack.Screen name="Info" component={gestureHandlerRootHOC(Info)} />
        <Stack.Screen
          name="Confirm"
          component={gestureHandlerRootHOC(Confirm)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}
