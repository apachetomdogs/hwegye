import React from "react";
import { Text, View } from "react-native";

import { colors } from "../theme/colors";

export default function WrongNoteScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text style={{ color: colors.textMain }}>오답 화면</Text>
    </View>
  );
}
