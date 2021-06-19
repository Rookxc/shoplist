import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextBox from "./components/TextBox";
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";
import Toast from "react-native-toast-message";
import { SplashScreen } from "expo";
export default function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  useEffect(() => {
    async function checkLogedIn() {
      const status = await AsyncStorage.getItem("userId");
      if (status !== null) setIsLogedIn(true);
    }
    checkLogedIn();
  }, []);

  return (
    <>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <NavigationContainer theme={navigationTheme}>
        {isLogedIn ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
  //return <ThankYou />;
  //return <ListScreen></ListScreen>;
  //return <AppList></AppList>;
  //return <SignUp />;
  //return <AppButton></AppButton>;
  //return <TextBox />;
}

const styles = StyleSheet.create({});
