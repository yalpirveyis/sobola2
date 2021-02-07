import React from "react";
import { View, Text } from "react-native";
import {
  useFonts,
  FiraSans_500Medium,
  FiraSans_700Bold,
} from "@expo-google-fonts/fira-sans";
export default function TextMd(props) {
  let [fontsLoaded] = useFonts({
    FiraSans_700Bold,
  });

  if (!fontsLoaded) {
    return <View />;
  }
  return (
    <Text
      style={{
        fontFamily: "FiraSans_700Bold",
        color: "black",
      }}
    >
      {props.children}
    </Text>
  );
}
