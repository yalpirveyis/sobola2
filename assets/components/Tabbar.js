import * as React from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";

export default function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        height: 60,
        elevation: 5,
        paddingBottom: 5,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            {label === "Home" && (
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: isFocused ? "red" : "blue",
                  }}
                  source={require("../icons/user.png")}
                />
                <View>
                  <Text>Arabam </Text>
                  <Text>Nerede</Text>
                </View>
              </View>
            )}
            {label === "Details" && (
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: isFocused ? "red" : "blue",
                  }}
                  source={require("../icons/user.png")}
                />
                <View>
                  <Text>Çağrı </Text>
                  <Text>Yap</Text>
                </View>
              </View>
            )}
            {label === "Settings" && (
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: isFocused ? "red" : "blue",
                  }}
                  source={require("../icons/user.png")}
                />
                <View>
                  <Text>Ayarlar </Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
