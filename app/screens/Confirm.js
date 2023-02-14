import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppColor } from "../utils/AppColor";
import { HEIGHT, WIDTH } from "../utils/AppDimension";
import ButtonComp from "../components/ButtonComp";
import { WaveIndicator } from "react-native-indicators";
import { Easing } from "react-native-reanimated";
import { driversData } from "../data/drivers";
import DriverInfo from "../components/DriverInfo";
import { PositionBackBtn } from "../components/reuseable/Reuseable";

const Confirm = () => {
  const destination = useSelector((state) => state.myLocation.destination);
  //   console.log(destination);
  const [drivers, setDrivers] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.backBtnWrapper}>
        <PositionBackBtn />
      </View>
      {drivers.length > 0 ? (
        <>
          <ScrollView>
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 7,
              }}
            >
              {driversData.map((driver) => (
                <DriverInfo driver={driver} key={driver.id} />
              ))}
            </View>
          </ScrollView>
          {/* <View style={styles.bottomContainer}>
            <ButtonComp text="Ok" />
          </View> */}
        </>
      ) : (
        <View style={styles.waitingContnetWrapper}>
          <View
            style={{
              width: "100%",
              height: 200,
            }}
          >
            <WaveIndicator
              color="red"
              size={200}
              animationDuration={2000}
              animationEasing={Easing.linear}
            />
          </View>
          <Text style={styles.waitingText}>Wait For Driver response...</Text>
        </View>
      )}
    </View>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.WHITE,
  },
  backBtnWrapper: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    marginBottom: 10,
  },
  waitingContnetWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    width: "100%",
    height: HEIGHT / 9,
    borderTopColor: AppColor.LightGray,
    borderTopWidth: 2,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  waitingText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
