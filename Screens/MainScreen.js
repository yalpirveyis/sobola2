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
  Animated,
} from "react-native";

import {
  useFonts,
  FiraSans_100Thin,
  FiraSans_100Thin_Italic,
  FiraSans_200ExtraLight,
  FiraSans_200ExtraLight_Italic,
  FiraSans_300Light,
  FiraSans_300Light_Italic,
  FiraSans_400Regular,
  FiraSans_400Regular_Italic,
  FiraSans_500Medium,
  FiraSans_500Medium_Italic,
  FiraSans_600SemiBold,
  FiraSans_600SemiBold_Italic,
  FiraSans_700Bold,
  FiraSans_700Bold_Italic,
  FiraSans_800ExtraBold,
  FiraSans_800ExtraBold_Italic,
  FiraSans_900Black,
  FiraSans_900Black_Italic,
} from "@expo-google-fonts/fira-sans";
import AppLoading from "expo-app-loading";

import { AnimatedCircularProgress } from "react-native-circular-progress";

import MapView from "react-native-maps";

export default function MainScreen({ navigation }) {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 0],
    outputRange: [0, 100],
  });

  let [fontsLoaded] = useFonts({
    FiraSans_700Bold,
    FiraSans_500Medium,
  });

  const [map, setMap] = useState(0);
  console.log(map);
  const MapStyle = [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#FFFFFF",
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#000000",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "all",
      stylers: [
        {
          lightness: "-1",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "all",
      stylers: [
        {
          lightness: "20",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#8a962f",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text",
      stylers: [
        {
          color: "#a4ff00",
        },
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "all",
      stylers: [
        {
          lightness: "20",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "labels.text",
      stylers: [
        {
          color: "#ca2f2f",
        },
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "all",
      stylers: [
        {
          lightness: "0",
        },
        {
          color: "#f1ff00",
        },
        {
          saturation: "9",
        },
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#3e3e3e",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
        {
          lightness: "-62",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#13232a",
        },
        {
          lightness: 17,
        },
      ],
    },
  ];
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 24 }}>
      {/* Header Start */}
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
        <TouchableOpacity style={{ marginRight: 100, alignSelf: "center" }}>
          <Image
            source={require("../assets/icons/menu.png")}
            style={{
              width: 24,
              height: 16,
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
          <Image
            source={require("../assets/icons/settings.png")}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Header End */}

      {/*All Page Start */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      >
        {/* Story Start */}
        <ScrollView
          style={{ flexDirection: "row", marginVertical: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            onPress={() => Alert.alert("Simple Button pressed")}
            style={{ position: "relative" }}
          >
            <AnimatedCircularProgress
              style={{ marginHorizontal: 10 }}
              size={93}
              width={5}
              backgroundWidth={5}
              fill={49}
              tintColor="#5A55A1"
              backgroundColor="#E6E6E6"
              arcSweepAngle={360}
              rotation={180}
              lineCap="round"
            />
            <Image
              source={require("../assets/icons/story.png")}
              style={{
                width: 70,
                height: 70,
                position: "absolute",
                alignSelf: "center",
                marginTop: 10,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Alert.alert("Simple Button pressed")}
            style={{ position: "relative" }}
          >
            <AnimatedCircularProgress
              style={{ marginHorizontal: 10 }}
              size={93}
              width={5}
              backgroundWidth={5}
              fill={49}
              tintColor="#5A55A1"
              backgroundColor="#E6E6E6"
              arcSweepAngle={360}
              rotation={180}
              lineCap="round"
            />
            <Image
              source={require("../assets/icons/story.png")}
              style={{
                width: 70,
                height: 70,
                position: "absolute",
                alignSelf: "center",
                marginTop: 10,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Alert.alert("Simple Button pressed")}
            style={{ position: "relative" }}
          >
            <AnimatedCircularProgress
              style={{ marginHorizontal: 10 }}
              size={93}
              width={5}
              backgroundWidth={5}
              fill={49}
              tintColor="#5A55A1"
              backgroundColor="#E6E6E6"
              arcSweepAngle={360}
              rotation={180}
              lineCap="round"
            />
            <Image
              source={require("../assets/icons/story.png")}
              style={{
                width: 70,
                height: 70,
                position: "absolute",
                alignSelf: "center",
                marginTop: 10,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Alert.alert("Simple Button pressed")}
            style={{ position: "relative" }}
          >
            <AnimatedCircularProgress
              style={{ marginHorizontal: 10 }}
              size={93}
              width={5}
              backgroundWidth={5}
              fill={49}
              tintColor="#5A55A1"
              backgroundColor="#E6E6E6"
              arcSweepAngle={360}
              rotation={180}
              lineCap="round"
            />
            <Image
              source={require("../assets/icons/story.png")}
              style={{
                width: 70,
                height: 70,
                position: "absolute",
                alignSelf: "center",
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
        </ScrollView>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginLeft: 15 }}>
            <Text
              style={{
                color: "#FFA200",
                fontSize: 14,
                fontFamily: "FiraSans_500Medium",
              }}
            >
              Selam
            </Text>
            <Text
              style={{
                color: "#5A55A1",
                fontSize: 32,
                fontFamily: "FiraSans_700Bold",
              }}
            >
              Taha Gür
            </Text>
            <Text
              style={{
                color: "#FFA200",
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "FiraSans_700Bold",
              }}
            >
              06 BM 4210
            </Text>
            <Image
              source={require("../assets/icons/car.png")}
              style={{
                width: 242,
                height: 112,
                alignSelf: "center",
                marginTop: 60,
                transform: [{ rotateZ: "-30deg" }],
                marginLeft: -75,
              }}
            />
          </View>

          <View>
            {map == 0 ? (
              <TouchableHighlight
                style={{
                  width: 150,
                  height: 230,
                  alignSelf: "center",
                  marginLeft: 10,
                  borderRadius: 20,
                  overflow: "hidden",
                }}
                onPress={() => navigation.navigate(Map)}
              >
                <MapView
                  customMapStyle={MapStyle}
                  style={styles.mapStyle}
                  initialRegion={{
                    latitude: 39.9166,
                    longitude: 32.8617,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                  }}
                >
                  <MapView.Marker
                    coordinate={{
                      latitude: 39.9166,
                      longitude: 32.8617,
                    }}
                    onPress={() => {}}
                  >
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Image
                        source={require("../assets/icons/pin.png")}
                        style={{
                          width: 21,
                          height: 45,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      />
                    </View>
                  </MapView.Marker>
                </MapView>
              </TouchableHighlight>
            ) : (
              <TouchableHighlight
                style={{
                  width: 150,
                  height: 230,
                  alignSelf: "center",
                  marginLeft: 10,
                  borderRadius: 20,
                  overflow: "hidden",
                }}
                onPress={() => navigation.navigate(Map)}
              >
                <View></View>
              </TouchableHighlight>
            )}

            <View
              style={{
                alignSelf: "center",
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: "center",
                  marginRight: 10,
                }}
                onPress={() => setMap(map + 1)}
              >
                <Image
                  source={require("../assets/icons/arrowl.png")}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: "center",
                  marginleft: 10,
                }}
                onPress={() => setMap(map - 1)}
              >
                <Image
                  source={require("../assets/icons/arrowr.png")}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              alignSelf: "center",
              color: "#5A55A1",
              fontWeight: "bold",
              fontSize: 24,
              marginBottom: 30,
              marginTop: 30,
              fontFamily: "FiraSans_700Bold",
            }}
          >
            Çağrılar
          </Text>
          <View
            style={{ flexDirection: "row", margin: -5, overflow: "hidden" }}
          >
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                alignSelf: "center",
                marginRight: 20,
              }}
            >
              <Image
                source={require("../assets/icons/arrowl.png")}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 20,
                padding: 5,
                borderColor: "#DEDEDE",
                backgroundColor: "#FFFFFF",
                width: 219,
                height: 169,
                position: "relative",
              }}
            >
              <Image
                source={require("../assets/icons/call.png")}
                style={{
                  width: 52,
                  height: 52,
                  alignSelf: "center",
                  marginTop: 10,
                }}
              />
              <Text
                style={{
                  color: "#5A55A1",
                  fontSize: 14,
                  justifyContent: "center",
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                07.10.2020 - 21:13:12
              </Text>
              <Text
                style={{
                  color: "#FFA200",
                  fontSize: 14,
                  justifyContent: "center",
                  textAlign: "center",
                  marginTop: 10,
                  fontWeight: "bold",
                }}
              >
                06 BM 4210
              </Text>
              <Image
                source={require("../assets/icons/car.png")}
                style={{
                  position: "absolute",
                  width: 95,
                  height: 44,
                  alignSelf: "center",
                  marginTop: 60,
                  transform: [{ rotateZ: "-45deg" }],
                  bottom: -15,
                  right: 0,
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                alignSelf: "center",
                marginLeft: 20,
              }}
            >
              <Image
                source={require("../assets/icons/arrowr.png")}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            alignSelf: "center",
            color: "#5A55A1",
            fontWeight: "bold",
            fontSize: 24,
            marginTop: 50,
          }}
        >
          Hizmet Bilgileri
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "#757575", fontSize: 14 }}>Üyelik Tipi:</Text>
          <Text style={{ color: "#5A55A1", fontSize: 14, fontWeight: "bold" }}>
            Aylık
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "#757575", fontSize: 14 }}>Kalan Süre</Text>
          <Text style={{ color: "#5A55A1", fontSize: 14, fontWeight: "bold" }}>
            21 Gün
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 30,
            alignItems: "center",
            marginBottom: 50,
            position: "relative",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFA200",
              width: 234,
              height: 56,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Hizmeti Uzat</Text>
          </View>
          <Image
            source={require("../assets/icons/qr.png")}
            style={{
              width: 82,
              height: 82,
              position: "absolute",
              right: 30,
              bottom: 0,
            }}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: 150,
    height: 230,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
