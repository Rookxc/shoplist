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

import WelcomeScreen from "./screens/WelcomeScreen";
import SignUp from "./screens/SignUp";
import ThankYou from "./screens/ThankYou";
import ListScreen from "./screens/ListScreen";
import { Colors } from "./config/colors.js";

import TextBox from "./components/TextBox";

import AppButton from "./components/AppButton";
import TextBoxWBtn from "./components/TextBoxWBtn";

export default function App({ navigation }) {
  //return <ThankYou />;
  return <ListScreen></ListScreen>;
  //return <SignUp />;
  //return <WelcomeScreen />;
  //return <AppButton></AppButton>;
  //return <TextBox />;
}

const styles = StyleSheet.create({});
