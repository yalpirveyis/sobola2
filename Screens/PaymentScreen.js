import * as React from "react";
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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function PaymentScreen({ navigation }) {
  return (
    <View style={{ flex: 1, marginTop: 24 }}>
      {/* Header Start */}

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
          source={require("../assets/icons/logo.png")}
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

      {/* Credit Card Start */}
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={styles.inner}>
            <ImageBackground
              source={require("../assets/backgroundImage/creditCard.png")}
              imageStyle={{ borderRadius: 15 }}
              style={{
                width: 285,
                height: 184,
                marginTop: 20,
                alignSelf: "center",
              }}
            >
              <View
                style={{
                  flexDrection: "row",
                  position: "relative",
                  height: 50,
                }}
              >
                <Text
                  style={{
                    position: "absolute",
                    left: 20,
                    marginTop: 10,
                    color: "#D6D6D6",
                    fontSize: 16,
                  }}
                >
                  Credit Card
                </Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    marginTop: 10,
                    color: "#D6D6D6",
                    fontSize: 16,
                  }}
                >
                  Bank Name
                </Text>
              </View>
              <Image
                source={require("../assets/icons/chip.png")}
                imageStyle={{ borderRadius: 15 }}
                style={{
                  width: 38,
                  height: 30,
                  marginLeft: 20,
                }}
              />
              <View
                style={{
                  justifyContent: "space-around",
                  flexDirection: "row",
                  marginTop: 15,
                  paddingHorizontal: 5,
                }}
              >
                <Text style={{ color: "#D6D6D6", fontSize: 18 }}>1234</Text>
                <Text style={{ color: "#D6D6D6", fontSize: 18 }}>5678</Text>
                <Text style={{ color: "#D6D6D6", fontSize: 18 }}>9876</Text>
                <Text style={{ color: "#D6D6D6", fontSize: 18 }}>1234</Text>
              </View>
              <View
                style={{
                  height: 15,
                  flexDirection: "row-reverse",
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "#D6D6D6", fontSize: 14 }}>01</Text>
                <Text style={{ color: "#D6D6D6", fontSize: 14 }}>/</Text>
                <Text style={{ color: "#D6D6D6", fontSize: 14 }}>21</Text>
                <View style={{ marginHorizontal: 10 }}>
                  <Text style={{ color: "#D6D6D6", fontSize: 6 }}>VALID</Text>
                  <Text style={{ color: "#D6D6D6", fontSize: 6 }}>THRU</Text>
                </View>
              </View>
              <Text style={{ fontSize: 18, color: "#D6D6D6", marginLeft: 20 }}>
                Name Surname
              </Text>
            </ImageBackground>
            {/* Credit Card End */}
            {/* İnput Start */}

            <View style={{ padding: 40 }}>
              <Text style={{ color: "#0D1724", fontSize: 14 }}>
                İsim Soyisim
              </Text>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#5A55A1",
                  fontSize: 18,
                  color: "#0D1724",
                  fontWeight: "bold",
                }}
              ></TextInput>
              <Text style={{ color: "#0D1724", fontSize: 14, marginTop: 20 }}>
                Kart Numaranız
              </Text>
              <TextInput
                keyboardType={"phone-pad"}
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#5A55A1",
                  fontSize: 18,
                  color: "#0D1724",
                  fontWeight: "bold",
                }}
              ></TextInput>
            </View>
            <View
              style={{
                paddingHorizontal: 40,
                flexDirection: "row",
                marginTop: -20,
              }}
            >
              <View style={{ width: 50 }}>
                <Text style={{ color: "#0D1724", fontSize: 14 }}>Ay</Text>
                <TextInput
                  keyboardType={"phone-pad"}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#5A55A1",
                    fontSize: 18,
                    color: "#0D1724",
                    fontWeight: "bold",
                  }}
                ></TextInput>
              </View>

              <View style={{ width: 50, marginLeft: 10 }}>
                <Text style={{ color: "#0D1724", fontSize: 14 }}>Yıl</Text>
                <TextInput
                  keyboardType={"phone-pad"}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#5A55A1",
                    fontSize: 18,
                    color: "#0D1724",
                    fontWeight: "bold",
                  }}
                ></TextInput>
              </View>
              <View style={{ width: 70, marginLeft: 95, marginBottom: 30 }}>
                <Text style={{ color: "#0D1724", fontSize: 14 }}>CVV</Text>
                <TextInput
                  keyboardType={"phone-pad"}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#5A55A1",
                    fontSize: 18,
                    color: "#0D1724",
                    fontWeight: "bold",
                  }}
                ></TextInput>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#5A55A1",
                borderRadius: 10,
                width: 300,
                alignSelf: "center",
                height: 55,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => null}
            >
              <Text
                style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}
              >
                Ödeme Yap
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      {/* İnput End */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});
