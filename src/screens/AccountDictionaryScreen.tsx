import React from "react";
import { Text, View } from "react-native";

import { colors } from "../theme/colors";

export default function AccountDictionaryScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text style={{ color: colors.textMain }}>계정 사전 화면</Text>
    </View>
  );
}
