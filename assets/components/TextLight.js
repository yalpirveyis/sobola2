import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts, FiraSans_300Light } from "@expo-google-fonts/fira-sans";
export default function TextL(props) {
  let [fontsLoaded] = useFonts({
    FiraSans_300Light,
  });

  if (!fontsLoaded) {
    return <View />;
  }
  return (
    <Text
      style={{
        fontFamily: "FiraSans_300Light",
        color: props.color,
        fontSize: props.fontSize,
      }}
      {...props}
    >
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "FiraSans_300Light",
  },
});
