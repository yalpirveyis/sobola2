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
  StyleSheet,
} from "react-native";
import * as Localization from "expo-localization";
import TextMd from "../assets/components/TextMd";
import TextSb from "../assets/components/TextSb";
import AsyncStorage from "@react-native-community/async-storage";

import StepperScreen from "./StepperScreen";

export default function LoginScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);

  const [mail, onChangeText] = useState("info@cygnus.com.tr");
  const [password, onChangeText2] = useState("123456");
  const [token, setToken] = useState("");

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

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
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
      >
        <Image
          source={require("../assets/icons/logo.png")}
          style={{
            width: 137,
            height: 72,
            alignSelf: "center",
            marginBottom: 20,
          }}
        />
        <TextMd color="#5A55A1" fontSize={18}>
          Lorem İpsum Dolor Sit Amet
        </TextMd>
        <View style={{ position: "relative", marginTop: 20 }}>
          <TextInput
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#FFFFFF",
              height: 48,
              width: 270,
              borderWidth: 1,
              alignSelf: "center",
              borderRadius: 30,
              paddingHorizontal: 10,
            }}
            onChangeText={(text) => onChangeText(text)}
            value={mail}
          />
          <Image
            source={require("../assets/icons/inputUserIcon.png")}
            style={{
              width: 16,
              height: 20,
              position: "absolute",
              marginTop: 14,
              right: 64,
            }}
          />
        </View>

        <View style={{ position: "relative", marginTop: 20 }}>
          <TextInput
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#FFFFFF",
              height: 48,
              width: 270,
              borderWidth: 1,
              alignSelf: "center",
              borderRadius: 30,
              paddingHorizontal: 10,
            }}
            onChangeText={(text) => onChangeText2(text)}
            value={password}
            secureTextEntry={true}
          />
          <Image
            source={require("../assets/icons/inputLockIcon.png")}
            style={{
              width: 26,
              height: 15,
              position: "absolute",
              marginTop: 16,
              right: 58,
            }}
          />
        </View>
        <View style={{ width: 270, alignSelf: "center", marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => Alert.alert("Simple Button pressed")}
            style={{ right: 0, position: "absolute" }}
          >
            <TextMd color="#757575" fontSize={14}>
              Parolanı mı unuttun?
            </TextMd>
          </TouchableOpacity>
        </View>
        <View style={{ width: 270, alignSelf: "center", marginTop: 40 }}>
          <TouchableOpacity
            onPress={() => submit()}
            style={{
              width: 115,
              height: 44,
              right: 0,
              position: "absolute",
              backgroundColor: "#5A55A1",
              borderRadius: 30,
              justifyContent: "center",
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
                <TextMd color="#FFFFFF">Giriş Yap</TextMd>
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
            position: "absolute",
            bottom: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <TextMd collor="#8A9EAD">Hesabınız yok mu?</TextMd>
            <TouchableOpacity
              style={{ marginLeft: 5 }}
              onPress={() => navigation.navigate("Membership")}
            >
              <TextMd color="#5A55A1">ÜYE OLUN </TextMd>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
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
