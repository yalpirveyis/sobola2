import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts, FiraSans_500Medium } from "@expo-google-fonts/fira-sans";
export default function TextMd(props) {
  let [fontsLoaded] = useFonts({
    FiraSans_500Medium,
  });

  if (!fontsLoaded) {
    return <View />;
  }
  return (
    <Text
      style={{
        fontFamily: "FiraSans_500Medium",
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
    fontFamily: "FiraSans_500Medium",
  },
});
