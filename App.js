import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  CheckBox,
  Linking,
  Image,
} from "react-native";

import LoginScreen from "./screens/LoginScreen";
import SignUp from "./screens/SignUp";
import ThankYou from "./screens/ThankYou";
import ListScreen from "./screens/ListScreen";
import AppList from "./components/AppList";
import { Colors } from "./config/colors.js";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";

import TextBox from "./components/TextBox";

import AppButton from "./components/AppButton";
import TextBoxWBtn from "./components/TextBoxWBtn";
import navigationTheme from "./navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
  //return <ThankYou />;
  //return <ListScreen></ListScreen>;
  //return <AppList></AppList>;
  //return <SignUp />;
  //return <AppButton></AppButton>;
  //return <TextBox />;
}

const styles = StyleSheet.create({});
