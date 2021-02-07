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

export default function SettingsScreen({ navigation }) {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 0],
    outputRange: [0, 100],
  });

  const [selectedValue, setSelectedValue] = useState("Araç Seç");
  const [selectedValue2, setSelectedValue2] = useState("Mesaj Seç");

  const [shouldShow, setShouldShow] = useState(false);
  const [password1, onChangeText1] = useState("");
  const [password2, onChangeText2] = useState("");

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  return (
    <View style={{ flex: 1, paddingTop: 24, backgroundColor: "#FFFFFF" }}>
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

            <Text style={{ margin: 30, color: "#1A1A1A" }}>
              Bilgilierimi Düzenle
            </Text>

            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#DEDEDE",
                width: 250,
                height: 44,
                paddingHorizontal: 10,
              }}
              placeholder="Ad Soyad"
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
              placeholder="Telefon Numaranız"
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
              placeholder="E Posta Adresiniz"
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

      {/*Modal2 */}

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

            <Text style={{ margin: 30, color: "#1A1A1A" }}>
              Şifremi Değiştir
            </Text>

            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#DEDEDE",
                width: 250,
                height: 44,
                paddingHorizontal: 10,
              }}
              placeholder="Eski Şifreniz"
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
              secureTextEntry={true}
              placeholder="Yeni Şifreniz"
              onChangeText={(text) => {
                onChangeText1(text);
                if (password1 == password2) {
                  console.log("true");
                  setShouldShow(true);
                } else {
                  console.log("false");
                  setShouldShow(false);
                }
              }}
              value={password1}
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
              secureTextEntry={true}
              placeholder="Yeni Şifreniz (tekrar)"
              onChangeText={(text) => {
                onChangeText2(text);
                if (password1 == password2) {
                  console.log("true");
                  setShouldShow(true);
                } else {
                  console.log("false");
                  setShouldShow(false);
                }
              }}
              value={password2}
            ></TextInput>

            {shouldShow == true ? (
              <View
                style={{
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 15,
                  width: 250,
                  height: 44,
                  borderRadius: 10,
                  hidden: true,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Şifreler Farklı
                </Text>
              </View>
            ) : null}

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
        <View style={{ padding: 20 }}>
          <TouchableOpacity
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
            }}
            onPress={() => {
              setModalVisible1(true);
            }}
          >
            <View style={{ width: 30, height: 30, left: -20 }}>
              <Image
                source={require("../assets/icons/user.png")}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "center",
                }}
              />
            </View>
            <View style={{ left: -30, width: 200, flexDirection: "row" }}>
              <TextMd fontSize={18} color="#0D0D0D">
                Bilgilerimi Düzenle
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
        <View style={{ padding: 20 }}>
          <TouchableOpacity
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
            }}
            onPress={() => {
              setModalVisible2(true);
            }}
          >
            <View style={{ width: 30, height: 30, left: -20 }}>
              <Image
                source={require("../assets/icons/inputLockIcon.png")}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "center",
                }}
              />
            </View>
            <View style={{ left: -30, width: 200, flexDirection: "row" }}>
              <TextMd fontSize={18} color="#0D0D0D">
                Şifremi Değiştir
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
        <View style={{ padding: 20 }}>
          <TouchableOpacity
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <View style={{ width: 30, height: 30, left: -20 }}>
              <Image
                source={require("../assets/icons/steeringWheel.png")}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "center",
                }}
              />
            </View>
            <View style={{ left: -30, width: 200, flexDirection: "row" }}>
              <TextMd fontSize={18} color="#0D0D0D">
                Araçlarım
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
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <View style={{ width: 30, height: 30, left: -20 }}>
              <Image
                source={require("../assets/icons/adress.png")}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "center",
                }}
              />
            </View>
            <View style={{ left: -30, width: 200, flexDirection: "row" }}>
              <TextMd fontSize={18} color="#0D0D0D">
                Adreslerim
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
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <View style={{ width: 30, height: 30, left: -20 }}>
              <Image
                source={require("../assets/icons/message.png")}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "center",
                }}
              />
            </View>
            <View style={{ left: -22, width: 220, flexDirection: "row" }}>
              <TextMd fontSize={18} color="#0D0D0D">
                Puanlarım & Yorumlarım
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
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <View style={{ width: 30, height: 30, left: -20 }}>
              <Image
                source={require("../assets/icons/sleeping.png")}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "center",
                }}
              />
            </View>
            <View style={{ left: -30, width: 200, flexDirection: "row" }}>
              <TextMd fontSize={18} color="#0D0D0D">
                Rahatsız Etme
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
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <View style={{ width: 30, height: 30, left: -20 }}>
              <Image
                source={require("../assets/icons/email.png")}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "center",
                }}
              />
            </View>
            <View style={{ left: -30, width: 200, flexDirection: "row" }}>
              <TextMd fontSize={18} color="#0D0D0D">
                Mesajlar
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
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <View style={{ width: 30, height: 30, left: -20 }}>
              <Image
                source={require("../assets/icons/autoReply.png")}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "center",
                }}
              />
            </View>
            <View style={{ left: -30, width: 200, flexDirection: "row" }}>
              <TextMd fontSize={18} color="#0D0D0D">
                Otomatik Cevaplar
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
