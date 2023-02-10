import { createContext, useState } from "react";

export const MyLocationContext = createContext();

export const LocationContextProvider = (props) => {
  const [userLocation, setUserLocation] = useState(null);

  return (
    <MyLocationContext.Provider value={{ userLocation, setUserLocation }}>
      {props.children}
    </MyLocationContext.Provider>
  );
};
