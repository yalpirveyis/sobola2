import React from "react";
import { View, Text, Image } from "react-native";

export default function Stars(props) {
  const Items = [];
  for (let str = 0; str < props.star; str++) {
    Items.push(
      <Image
        source={require("../icons/star.png")}
        style={{
          width: 18,
          height: 18,
        }}
        key={str}
      />
    );
  }
  return (
    <View style={{ position: "relative", marginTop: 25 }} {...props}>
      <View style={{ flexDirection: "row", zIndex: 1, width: 100 }}>
        {Items}
      </View>
      <View style={{ position: "absolute", flexDirection: "row", width: 100 }}>
        <Image
          source={require("../icons/star0.png")}
          style={{
            width: 18,
            height: 18,
          }}
        />
        <Image
          source={require("../icons/star0.png")}
          style={{
            width: 18,
            height: 18,
          }}
        />
        <Image
          source={require("../icons/star0.png")}
          style={{
            width: 18,
            height: 18,
          }}
        />
        <Image
          source={require("../icons/star0.png")}
          style={{
            width: 18,
            height: 18,
          }}
        />
        <Image
          source={require("../icons/star0.png")}
          style={{
            width: 18,
            height: 18,
          }}
        />
      </View>
    </View>
  );
}
