import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./Screens/LoginScreen";
import MembershipScreen from "./Screens/MembershipScreen";
import MainScreen from "./Screens/MainScreen";
import HomeScreen from "./Screens/HomeScreen";
import StepperScreen from "./Screens/StepperScreen";
import QrScreen from "./Screens/QrScreen";
import MapScreen from "./Screens/MapScreen";
import MakeCallScreen from "./Screens/MakeCallScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import MessagesScreen from "./Screens/MessagesScreen";
import MessageDetailsScreen from "./Screens/MessageDetailsScreen";
import CommentsScreen from "./Screens/CommentsScreen";
import AdressScreen from "./Screens/AdressScreen";
import AutoMessageScreen from "./Screens/AutoMessageScreen";
import NoNotifyScreen from "./Screens/NoNotifyScreen";
import CarsScreen from "./Screens/CarsScreen";
import IncomingCallScreen from "./Screens/IncomingCallScreen";

import Tabs from "./Screens/Tabs";

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Membership"
          component={MembershipScreen}
          options={() => {
            return { headerShown: false };
          }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Stepper"
          component={StepperScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Qr"
          component={QrScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="MakeCall"
          component={MakeCallScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Messages"
          component={MessagesScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="MessageDetails"
          component={MessageDetailsScreen}
          options={() => {
            return { headerShown: false };
          }}
        />

        <Stack.Screen
          name="Comments"
          component={CommentsScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Adress"
          component={AdressScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="AutoMessage"
          component={AutoMessageScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="NoNotify"
          component={NoNotifyScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Cars"
          component={CarsScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="IncomingCall"
          component={IncomingCallScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
