import { Text } from "react-native";
import React from "react";

const TextComp = ({ text, extraStyle }) => (
  <Text
    style={[
      {
        fontSize: 18,
        fontWeight: "700",
      },
      extraStyle,
    ]}
  >
    {text}
  </Text>
);

export default TextComp;
