import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
  FlatList,
  ScrollViewBase,
  Animated,
  Modal,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import TextMd from "../assets/components/TextMd";
import TextL from "../assets/components/TextLight";

export default function IncomingCallScreen({ navigation }) {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 0],
    outputRange: [0, 100],
  });

  return (
    <View style={{ flex: 1, paddingTop: 24, backgroundColor: "#FFFFFF" }}>
      {/* absolute add buton */}

      {/* absolute aniamted tab bar*/}

      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "#FFFFFF",
          transform: [{ translateY: translateY }],
          elevation: 4,
          zIndex: 100,
          width: Dimensions.get("window").width,
        }}
      >
        <View
          style={{
            height: 60,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={require("../assets/icons/menuLocation.png")}
              style={{
                width: 40,
                height: 40,
                resizeMode: "center",
                borderRadius: 999,
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text>Arabam</Text>
              <Text>Nerede</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={require("../assets/icons/menuMessage.png")}
              style={{
                width: 40,
                height: 40,
                resizeMode: "center",
                borderRadius: 999,
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text>Çağrı</Text>
              <Text>Yap</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={require("../assets/icons/menuSetting.png")}
              style={{
                width: 40,
                height: 40,
                resizeMode: "center",
                borderRadius: 999,
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text>Ayarlar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <View
        style={{
          width: Dimensions.get("window").width,
          height: 50,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={{ marginRight: 100, alignSelf: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../assets/icons/back.png")}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/icons/logoSmall.png")}
          style={{
            width: 31,
            height: 34,
            alignSelf: "center",
          }}
        />
        <TouchableOpacity style={{ marginLeft: 100, alignSelf: "center" }}>
          <View
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Header End */}
      {/*List Start*/}
      {/*List İtem*/}
      <ScrollView
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      >
        <View style={{ alignItems: "center", marginTop: 70 }}>
          <TextMd fontSize={22} color="#5A55A1">
            GELEN ÇAĞRILAR
          </TextMd>
          <View
            style={{
              width: 220,
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#5A55A1",
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <TextMd fontSize={22} color="#FFFFFF">
              06 BM 4210
            </TextMd>
          </View>

          <View style={{ marginTop: 30 }}>
            <TextMd fontSize={22} color="#5A55A1">
              GELEN ÇAĞRILAR
            </TextMd>
          </View>
          <View
            style={{
              width: 220,
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#5A55A1",
              borderRadius: 10,
              marginTop: 10,
              borderWidth: 2,
            }}
          >
            <TextMd fontSize={22} color="#5A55A1">
              06 AJ 3709
            </TextMd>
          </View>
          <View style={{ marginTop: 30, maxWidth: 277 }}>
            <View style={{ alignSelf: "center", marginBottom: 10 }}>
              <TextMd fontSize={22} color="#5A55A1">
                Mesaj:
              </TextMd>
            </View>
            <TextL>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labor…
            </TextL>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
