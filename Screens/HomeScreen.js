import * as React from "react";
import {
  View,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import TextMd from "../assets/components/TextMd";
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ marginTop: 24 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <TextMd color={"green"} fontSize={22}>
          Tüm Sayfalar
        </TextMd>
        <Button
          title="LoginScreen"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="MembershipScreen"
          onPress={() => navigation.navigate("Membership")}
        />
        <Button
          title="Stepper Screen"
          onPress={() => navigation.navigate("Stepper")}
        />
        <Button
          title="Main Screen"
          onPress={() => navigation.navigate("Main")}
        />
        <Button title="Tabs" onPress={() => navigation.navigate("Tabs")} />
        <Button title="Qr" onPress={() => navigation.navigate("Qr")} />
        <Button title="Map" onPress={() => navigation.navigate("Map")} />
        <Button
          title="MakeCall"
          onPress={() => navigation.navigate("MakeCall")}
        />
        <Button
          title="Payment"
          onPress={() => navigation.navigate("Payment")}
        />
        <Button
          title="Settings"
          onPress={() => navigation.navigate("Settings")}
        />
        <Button
          title="Messages"
          onPress={() => navigation.navigate("Messages")}
        />

        <Button
          title="MessageDetail"
          onPress={() => navigation.navigate("MessageDetails")}
        />
        <Button
          title="Comments"
          onPress={() => navigation.navigate("Comments")}
        />
        <Button title="Adress" onPress={() => navigation.navigate("Adress")} />
        <Button
          title="AutoMessage"
          onPress={() => navigation.navigate("AutoMessage")}
        />
        <Button
          title="NoNotify"
          onPress={() => navigation.navigate("NoNotify")}
        />
        <Button title="Cars" onPress={() => navigation.navigate("Cars")} />
        <Button
          title="IncomingCall"
          onPress={() => navigation.navigate("IncomingCall")}
        />
      </View>
    </ScrollView>
  );
}
