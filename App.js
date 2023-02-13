import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Location from "expo-location";

import GetRide from "./app/screens/GetRide";
import Home from "./app/screens/Home";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { MyLocationContext } from "./app/context/LocationContext";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  // getting user location

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        console.log("not granted permision");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const address = await Location.reverseGeocodeAsync(location.coords);
      // console.log(address);
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    })();
  }, []);

  return (
    <NavigationContainer>
      <MyLocationContext.Provider value={{ userLocation, setUserLocation }}>
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
        </Stack.Navigator>
      </MyLocationContext.Provider>
    </NavigationContainer>
  );
}
