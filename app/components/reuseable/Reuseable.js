import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AppColor } from "../../utils/AppColor";
import { menu, takaIcon } from "../../utils/fileExport";
import TextComp from "../TextComp";

export const PositionBackBtn = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.positionBackBtnStyle}
      onPress={() => navigation.goBack()}
    >
      <Image
        source={menu}
        style={{
          width: 20,
          height: 20,
          tintColor: AppColor.RED,
        }}
      />
    </Pressable>
  );
};
export const SelectVehical = ({
  vehicalDetails,
  onPress,
  selectVehical,
  price,
}) => (
  <Pressable
    style={[
      styles.vehicalStyle,
      selectVehical == vehicalDetails.id && {
        backgroundColor: "#ddd",
      },
    ]}
    onPress={onPress}
  >
    <Image source={vehicalDetails.img} style={styles.vehicalImgStyle} />
    <Text>{vehicalDetails.name}</Text>
    <View style={styles.priceWrapper}>
      <Image source={takaIcon} style={styles.takaIconStyle} />
      <TextComp text={price} extraStyle={styles.extraTextStyle} />
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  positionBackBtnStyle: {
    position: "absolute",
    width: 45,
    height: 45,
    backgroundColor: AppColor.WHITE,
    borderRadius: 100,
    top: 10,
    left: 20,
    zIndex: 999,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  vehicalStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    paddingVertical: 10,
  },
  vehicalImgStyle: {
    width: 40,
    height: 30,
    marginBottom: 4,
  },
  extraTextStyle: {
    color: AppColor.RED,
    marginTop: 2,
    fontSize: 14,
  },
  priceWrapper: { flexDirection: "row", alignItems: "center" },
  takaIconStyle: {
    width: 13,
    height: 13,
    tintColor: AppColor.Black,
    marginRight: 3,
  },
});
