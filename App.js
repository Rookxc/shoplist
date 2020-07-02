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

import Login from "./screens/WelcomeScreen";
import SignUp from "./screens/SignUp";
import ThankYou from "./screens/ThankYou";

export default function App({ navigation }) {
  //return <ThankYou />;
  return <SignUp />;
  //return <Login />;
}
