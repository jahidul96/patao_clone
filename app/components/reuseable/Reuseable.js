import { useNavigation } from "@react-navigation/native";
import { Image, Pressable } from "react-native";
import { AppColor } from "../../utils/AppColor";
import { menu } from "../../utils/fileExport";

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
