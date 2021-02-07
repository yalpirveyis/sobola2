import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
export default function QrScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [type, setType] = useState("");

  const [data, setData] = useState("");
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

    setData(data);
    setType(type);
  };
  console.log(data);
  console.log(type);
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 24,
          padding: 20,
          zIndex: 2,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/icons/backWhite.png")}
            style={{
              width: 30,
              height: 30,

              resizeMode: "center",
            }}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          width: 300,
          height: 100,
          fontSize: 22,
          color: "white",
          zIndex: 1,
          textAlign: "center",
          alignSelf: "center",
        }}
      >
        Telefonunuzu {"\n"} Sobola Sticker’ına Yaklaştırın!
      </Text>

      <BarCodeScanner
        torchMode="flash"
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && navigation.navigate("MakeCall", { data: data, type: type })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    position: "relative",
  },
});
