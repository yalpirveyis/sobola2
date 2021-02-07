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
  Modal,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as Localization from "expo-localization";
import TextMd from "../assets/components/TextMd";
import TextSb from "../assets/components/TextSb";
import AsyncStorage from "@react-native-community/async-storage";

import StepperScreen from "./StepperScreen";

export default function LoginScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  {
    /*
  const submit = () => {
    fetch("http://185.122.201.2:7626/sobola/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: mail,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        console.log(data);
        console.log(token);
        console.log("token");
        navigation.navigate("Main");
        AsyncStorage.setItem("token", token);
        console.log("token yenilendi");
      });
  };
  */
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <ImageBackground
        source={require("../assets/backgroundImage/login.png")}
        style={{
          flex: 1,
          position: "absolute",
          left: 0,
          top: 0,
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          resizeMode: "cover",
          justifyContent: "center",
        }}
      ></ImageBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1, marginTop: 100 }}>
              <Image
                source={require("../assets/icons/logo.png")}
                style={{
                  width: 137,
                  height: 72,
                  alignSelf: "center",
                  marginBottom: 20,
                }}
              />
              <View style={{ alignItems: "center" }}>
                <TextMd color="#5A55A1" fontSize={18}>
                  Lorem İpsum Dolor Sit Amet
                </TextMd>
              </View>
              <View
                style={{
                  position: "relative",
                  marginTop: 20,
                  flexDirection: "row",
                }}
              >
                <TextInput
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#FFFFFF",
                    height: 48,
                    width: 270,
                    borderWidth: 1,
                    alignSelf: "center",
                    borderRadius: 30,
                    paddingHorizontal: 20,
                  }}
                  placeholder="Ad Soyad"
                  onChangeText={(text) => setName(text)}
                  value={name}
                />
                <Image
                  source={require("../assets/icons/inputUserIcon.png")}
                  style={{
                    width: 16,
                    height: 20,
                    alignSelf: "center",
                    right: 30,
                  }}
                />
              </View>

              <View
                style={{
                  position: "relative",
                  marginTop: 20,
                  flexDirection: "row",
                }}
              >
                <TextInput
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#FFFFFF",
                    height: 48,
                    width: 270,
                    borderWidth: 1,
                    alignSelf: "center",
                    borderRadius: 30,
                    paddingHorizontal: 20,
                  }}
                  placeholder="Email"
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />
                <Image
                  source={require("../assets/icons/email.png")}
                  style={{
                    width: 20,
                    height: 16,
                    alignSelf: "center",
                    right: 30,
                  }}
                />
              </View>

              <View
                style={{
                  position: "relative",
                  marginTop: 20,
                  flexDirection: "row",
                }}
              >
                <TextInput
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#FFFFFF",
                    height: 48,
                    width: 270,
                    borderWidth: 1,
                    alignSelf: "center",
                    borderRadius: 30,
                    paddingHorizontal: 20,
                  }}
                  placeholder="Telefon"
                  onChangeText={(text) => setNumber(text)}
                  value={number}
                />
                <Image
                  source={require("../assets/icons/inputCall.png")}
                  style={{
                    width: 24,
                    height: 24,
                    alignSelf: "center",
                    right: 30,
                  }}
                />
              </View>

              <View
                style={{
                  position: "relative",
                  marginTop: 20,
                  flexDirection: "row",
                }}
              >
                <TextInput
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#FFFFFF",
                    height: 48,
                    width: 270,
                    borderWidth: 1,
                    alignSelf: "center",
                    borderRadius: 30,
                    paddingHorizontal: 20,
                  }}
                  placeholder="Kullanıcı Adı"
                  onChangeText={(text) => setUserName(text)}
                  value={userName}
                />
                <Image
                  source={require("../assets/icons/inputUserIcon.png")}
                  style={{
                    width: 16,
                    height: 20,
                    alignSelf: "center",
                    right: 30,
                  }}
                />
              </View>

              <View
                style={{
                  position: "relative",
                  marginTop: 20,
                  flexDirection: "row",
                }}
              >
                <TextInput
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#FFFFFF",
                    height: 48,
                    width: 270,
                    borderWidth: 1,
                    alignSelf: "center",
                    borderRadius: 30,
                    paddingHorizontal: 20,
                  }}
                  placeholder="Şifre"
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />
                <Image
                  source={require("../assets/icons/inputLockIcon.png")}
                  style={{
                    width: 26,
                    height: 15,
                    alignSelf: "center",
                    right: 35,
                  }}
                />
              </View>

              <View
                style={{
                  width: 270,
                  alignSelf: "center",
                  alignItems: "flex-end",
                }}
              >
                <TouchableOpacity
                  onPress={() => submit()}
                  style={{
                    width: 115,
                    height: 44,

                    backgroundColor: "#5A55A1",
                    borderRadius: 30,
                    justifyContent: "center",

                    marginTop: 20,
                  }}
                >
                  <View
                    style={{
                      position: "relative",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ marginRight: 20 }}>
                      <TextMd color="#FFFFFF">Üye Ol</TextMd>
                    </View>
                    <Image
                      source={require("../assets/icons/rightArrow.png")}
                      style={{
                        width: 20,
                        height: 20,
                        position: "absolute",
                        right: 10,
                        marginTop: 2,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: 270,
                  alignSelf: "center",
                  marginTop: 25,
                }}
              >
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                  <TextMd collor="#8A9EAD">Hesabınız var mı?</TextMd>
                  <TouchableOpacity
                    style={{ marginLeft: 5 }}
                    onPress={() => navigation.navigate("Membership")}
                  >
                    <TextMd color="#5A55A1">GİRİŞ YAPIN</TextMd>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
