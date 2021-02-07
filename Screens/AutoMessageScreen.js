import React, { useState, useEffect } from "react";
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

import * as Location from "expo-location";

import TextL from "../assets/components/TextLight";
import TextMd from "../assets/components/TextMd";

export default function AutoMessageScreen({ navigation }) {
  {
    /* flatlit items*/
  }
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      selected: 1,
      title:
        "Şair Mehmet Emin Caddesi 11/10 Keçiören       (Kavacık Subayevleri Mah.)  ",
      content: "EV ADRESİM",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      selected: 0,
      title:
        "Şair Mehmet Emin Caddesi 11/10 Keçiören       (Kavacık Subayevleri Mah.)  ",
      content: "İŞ ADRESİM",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      selected: 0,
      title:
        "Şair Mehmet Emin Caddesi 11/10 Keçiören       (Kavacık Subayevleri Mah.)  ",
      content: "HALI SAHA",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d11",
      selected: 0,
      title:
        "Şair Mehmet Emin Caddesi 11/10 Keçiören       (Kavacık Subayevleri Mah.)  ",
      content: "HER ZAMANKİ KAFE",
    },
  ];

  const Item2 = ({ title, content }) => (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        width: 330,
        alignSelf: "center",
        height: 160,
        padding: 20,
        borderRadius: 20,
        elevation: 5,
        marginBottom: 20,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <TextMd color="#5A55A1">{content}</TextMd>
      </View>
      <View style={{ minWidth: 280, minHeight: 40 }}>
        <TextL color="#707070">{title}</TextL>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#5A55A1",
            borderRadius: 10,
          }}
          onPress={() => {
            setModalVisible2(true);
          }}
        >
          <TextL color="#FFFFFF" fontSize={14}>
            Düzenle
          </TextL>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 60,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#C3C3C3",
            borderRadius: 10,
            marginLeft: 10,
          }}
        >
          <TextL color="#000000" fontSize={14}>
            Sil
          </TextL>
        </TouchableOpacity>
      </View>
    </View>
  );
  {
    /* flatlit items*/
  }
  const [latitudeInfo, setLatitudeInfo] = useState(latitude);
  const [longitudeInfo, setLongitudeInfo] = useState(longitude);
  const [adressTitle, setAdressTitle] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [adress, setAdress] = useState("");

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 0],
    outputRange: [0, 100],
  });

  const [message, onChangeText] = useState("");
  const [who, setWho] = useState(2);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let latitude = "Waiting..";
  let longitude = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    latitude = JSON.stringify(location.coords.latitude);

    longitude = JSON.stringify(location.coords.longitude);
  }
  const renderItem = ({ item }) => {
    return <Item2 title={item.title} content={item.content} />;
  };

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 24,
        position: "relative",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/*Modal */}

      <Modal transparent={true} visible={modalVisible1}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#5A55A1",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",

                top: 10,
                zIndex: 1,
                position: "absolute",
              }}
              onPress={() => {
                setModalVisible1(!modalVisible1);
              }}
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

            <View style={{ marginTop: 20 }}>
              <TextMd fontSize={20} color="#1A1A1A">
                Mesaj Ekle
              </TextMd>
            </View>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TextL fontSize={14}>Enlem:{latitude}</TextL>
              <View style={{ marginLeft: 20 }}>
                <TextL fontSize={14}>Boylam:{longitude}</TextL>
              </View>
            </View>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#DEDEDE",
                width: 250,
                height: 44,
                paddingHorizontal: 10,
                marginTop: 20,
              }}
              placeholder="Adres Başlık"
            ></TextInput>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#DEDEDE",
                width: 250,
                height: 44,
                paddingHorizontal: 10,
                marginTop: 20,
              }}
              placeholder="İl"
            ></TextInput>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#DEDEDE",
                width: 250,
                height: 44,
                paddingHorizontal: 10,
                marginTop: 20,
              }}
              placeholder="İlçe"
            ></TextInput>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#DEDEDE",
                width: 250,
                height: 44,
                paddingHorizontal: 10,
                height: 100,
                marginTop: 20,
              }}
              placeholder="Adres"
              multiline
              numberOfLines={4}
            ></TextInput>

            <TouchableOpacity
              style={{
                width: 250,
                height: 40,
                backgroundColor: "#5A55A1",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
              onPress={() => {}}
            >
              <Text
                style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
              >
                Kaydet
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/*Modal */}

      {/*Modal */}

      <Modal transparent={true} visible={modalVisible2}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextL>Silmek istediğinize emin misiniz?</TextL>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#65AF00",
                  borderRadius: 30,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setModalVisible2(!modalVisible2);
                }}
              >
                <Image
                  source={require("../assets/icons/yesIcon.png")}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "center",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#FD3E31",
                  borderRadius: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 20,
                }}
                onPress={() => {
                  setModalVisible2(!modalVisible2);
                }}
              >
                <Image
                  source={require("../assets/icons/noIcon.png")}
                  style={{
                    width: 27,
                    height: 27,
                    resizeMode: "center",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/*Modal */}
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
        style={{ flex: 1 }}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      >
        <FlatList
          scrollToIndex={7}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <TouchableOpacity
          style={{
            width: 330,
            alignSelf: "center",
            height: 55,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#5A55A1",
            borderRadius: 15,
            marginBottom: 20,
          }}
          onPress={() => {
            setModalVisible1(true);
          }}
        >
          <TextMd color="#FFFFFF" fontSize={18}>
            Mesaj Ekle
          </TextMd>
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
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(100,100,100, 0.5)",
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
