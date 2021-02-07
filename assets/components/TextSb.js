import React from "react";
import { View, Text } from "react-native";
import { useFonts, FiraSans_600SemiBold } from "@expo-google-fonts/fira-sans";
export default function TextMd(props) {
  let [fontsLoaded] = useFonts({
    FiraSans_600SemiBold,
  });

  if (!fontsLoaded) {
    return <View />;
  }
  return (
    <Text
      style={{
        fontFamily: "FiraSans_600SemiBold",
        color: "black",
      }}
    >
      {props.children}
    </Text>
  );
}
