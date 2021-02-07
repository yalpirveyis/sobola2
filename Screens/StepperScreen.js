import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

import Carousel from "react-native-snap-carousel";

import TextMd from "../assets/components/TextMd";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function StepperScreen({ navigation }) {
  const carouselItems = [
    {
      img: require("../assets/StepperImg/splash1.png"),
    },
    {
      img: require("../assets/StepperImg/splash2.png"),
    },
    {
      img: require("../assets/StepperImg/splash3.png"),
      button: "dolu",
    },
  ];

  function _renderItem({ item, index }) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          borderRadius: 5,
          height: windowHeight,
          position: "relative",
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>

        <Image
          style={{ flex: 1, width: "100%", height: "100%", marginTop: -41 }}
          source={item.img}
        />
        {item.button === "dolu" ? (
          <TouchableOpacity
            style={{
              backgroundColor: "#5A55A1",
              width: 234,
              height: 56,
              left: 0,
              bottom: 0,
              zIndex: 110,
              position: "absolute",
              elevation: 5,
              borderRadius: 28,
              marginLeft: (windowWidth - 234) / 2,
              marginBottom: 70,
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <TextMd color="#FFFFFF" fontSize={16}>
              Haydi Başlayalım
            </TextMd>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 24 }}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          layout={"default"}
          ref={(ref) => (carousel = ref)}
          data={carouselItems}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          renderItem={_renderItem}
          onSnapToItem={(index) => ({ activeIndex: index })}
        />
      </View>
    </SafeAreaView>
  );
}
