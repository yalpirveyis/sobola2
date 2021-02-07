import React, { useState } from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  TouchableHighlight,
} from "react-native";
import * as Linking from "expo-linking";
export default function MapScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

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
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 40,
                backgroundColor: "#020B48",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text
                style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
              >
                Kapat
              </Text>
            </TouchableOpacity>
            <Image
              source={require("../assets/icons/car.png")}
              style={{ width: 120, height: 50 }}
            />
            <Text style={{ margin: 10 }}>Arabanızın</Text>
            <Text style={{ color: "red" }}>
              Enlem<Text style={{ color: "black" }}>39,2654</Text>
            </Text>
            <Text style={{ color: "red" }}>
              Boylam:<Text style={{ color: "black" }}>28,3514654</Text>
            </Text>

            <Text style={{ marginTop: 10, color: "black" }}>
              Arabanızın konumuna gitmek için yol tarifi alın
            </Text>

            <TouchableOpacity
              style={{
                width: 100,
                height: 40,
                backgroundColor: "#020B48",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
              onPress={() => {
                Linking.openURL(
                  "https://www.google.com/maps?q=37.8341413,32.4758212&z=17&hl=tr"
                );
              }}
            >
              <Text
                style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
              >
                Yol Tarifi Al
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#ff0031ad",
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          right: 10,
          top: 30,
          zIndex: 1,
          position: "absolute",
        }}
        onPress={() => navigation.goBack()}
      >
        <Text
          style={{
            fontSize: 24,
            color: "white",
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          x
        </Text>
      </TouchableOpacity>
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
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
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
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
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
