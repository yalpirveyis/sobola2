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
} from "react-native";

import TextMd from "../assets/components/TextMd";

export default function MessagesScreen({ navigation }) {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 0],
    outputRange: [0, 100],
  });

  return (
    <View style={{ flex: 1, marginTop: 24, position: "relative" }}>
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

      {/* absolute artı butonu*/}

      <TouchableOpacity
        style={{ position: "absolute", right: 20, bottom: 60, zIndex: 222 }}
      >
        <Image
          source={require("../assets/icons/add.png")}
          style={{
            width: 50,
            height: 50,
            resizeMode: "center",
            borderRadius: 999,
          }}
        />
      </TouchableOpacity>
      {/* Header Start */}

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
        <View style={{ padding: 20 }}>
          <TouchableOpacity
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/icons/user.jpeg")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "center",
                borderRadius: 999,
              }}
            />

            <View style={{}}>
              <View style={{ left: 10, width: 200, flexDirection: "row" }}>
                <TextMd fontSize={16} color="#0D0D0D">
                  Ahmet Taner Aydınoğlu
                </TextMd>
              </View>
              <View style={{ left: 10, width: 200, flexDirection: "row" }}>
                <TextMd fontSize={13} color="#A7A8AB">
                  Mehtap sokaktaki arabayı...
                </TextMd>
              </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <TextMd fontSize={12} color="#A7A8AB">
                12 saat önce
              </TextMd>

              <View
                style={{
                  backgroundColor: "#5A55A1",
                  width: 12,
                  height: 12,
                  marginTop: 10,
                  borderRadius: 999,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
