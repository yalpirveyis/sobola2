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

export default function CarsScreen({ navigation }) {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 0],
    outputRange: [0, 100],
  });

  const [selectedValue, setSelectedValue] = useState("Araç Seç");
  const [selectedValue2, setSelectedValue2] = useState("Mesaj Seç");

  const [shouldShow, setShouldShow] = useState(false);
  const [time1, setTime1] = useState("");
  const [time2, setTime2] = useState("");
  const [time3, setTime3] = useState("");
  const [time4, setTime4] = useState("");

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const [notify, setNotify] = useState(0);
  return (
    <View style={{ flex: 1, paddingTop: 24, backgroundColor: "#FFFFFF" }}>
      {/* absolute add buton */}
      <TouchableOpacity
        style={{ position: "absolute", right: 20, bottom: 60, zIndex: 222 }}
        onPress={() => {
          setModalVisible2(true);
        }}
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
                Araç Düzenle
              </TextMd>
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
              placeholder="Plaka"
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
              placeholder="Marka"
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
              placeholder="Model"
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
              placeholder="Renk"
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
              placeholder="SOBOLA KODU"
            ></TextInput>

            <TouchableOpacity
              style={{
                width: 250,
                height: 55,
                backgroundColor: "#5A55A1",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
              onPress={() => {
                setModalVisible1(!modalVisible1);
              }}
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
                setModalVisible2(!modalVisible2);
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
                Araç Ekle
              </TextMd>
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
              placeholder="Plaka"
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
              placeholder="Marka"
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
              placeholder="Model"
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
              placeholder="Renk"
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
              placeholder="SOBOLA KODU"
            ></TextInput>
            <TouchableOpacity
              style={{
                width: 250,
                height: 55,
                backgroundColor: "#5A55A1",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
              onPress={() => {
                setModalVisible2(!modalVisible2);
              }}
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
        {/*List İtem*/}
        <View style={{ padding: 20 }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible1(true);
            }}
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <View style={{ left: -30, width: 200, flexDirection: "row" }}>
              <TextMd fontSize={18} color="#0D0D0D">
                06 BM 4210
              </TextMd>
            </View>
            <Image
              source={require("../assets/icons/arrowRight.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: "#707070",
                right: -20,
              }}
            />
          </TouchableOpacity>
        </View>
        {/*List İtem*/}

        {/*List İtem*/}

        {/*List İtem*/}
        <View style={{ padding: 20 }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible1(true);
            }}
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <View style={{ left: -22, width: 220, flexDirection: "row" }}>
              <TextMd fontSize={18} color="#0D0D0D">
                06 GCF 43
              </TextMd>
            </View>
            <Image
              source={require("../assets/icons/arrowRight.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: "#707070",
                right: -20,
              }}
            />
          </TouchableOpacity>
        </View>
        {/*List İtem*/}

        {/*List End*/}
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
