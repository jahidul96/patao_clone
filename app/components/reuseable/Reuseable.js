import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AppColor } from "../../utils/AppColor";
import { menu, takaIcon } from "../../utils/fileExport";
import TextComp from "../TextComp";

export const PositionBackBtn = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{
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
        elevation: 5,
      }}
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
  img,
  name,
  price,
  onPress,
  selectVehical,
  id,
}) => (
  <Pressable
    style={[
      styles.vehicalStyle,
      selectVehical == id && {
        backgroundColor: "#ddd",
      },
    ]}
    onPress={onPress}
  >
    <Image source={img} style={styles.vehicalImgStyle} />
    <Text>{name}</Text>
    <View style={styles.priceWrapper}>
      <Image source={takaIcon} style={styles.takaIconStyle} />
      <TextComp text={price} extraStyle={styles.extraTextStyle} />
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
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
