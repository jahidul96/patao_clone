import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GetRide from "./app/screens/GetRide";
import Home from "./app/screens/Home";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function App() {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
