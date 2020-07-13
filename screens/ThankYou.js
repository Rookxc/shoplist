import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

import { Colors } from "../config/colors.js";
import AppButton from "../components/AppButton.js";

import topRight from "../assets/topRight.png";
import bottomLeft from "../assets/bottomLeft.png";

const screenHeight = Math.round(Dimensions.get("window").height);

const polovicaEkranaJebemti = screenHeight / 2.5;

export default function Login({ navigation }) {
  return (
    <React.Fragment>
      <View style={styles.imageContainer}>
        <Image source={topRight} style={styles.ImageStyle} />
      </View>

      <View style={styles.thanksContainer}>
        <Text style={styles.thanks}> Thank you for registering!</Text>
        <Text style={styles.text}>
          {" "}
          This app is made and designed by{"\n"}
          <Text style={styles.names}>Brandon & Rookxc!</Text>
          {"\n"}Logo made by <Text style={styles.names}>Dooxer</Text>.
        </Text>
      </View>

      <AppButton btnText={"CONTINUE TO APP"}></AppButton>

      <View style={styles.bottomImageContainer}>
        <Image source={bottomLeft} style={styles.bottomImageStyle} />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  thanksContainer: {
    marginTop: polovicaEkranaJebemti,
    fontSize: 20,
    fontWeight: "bold",
  },

  credits: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },

  names: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  thanks: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    width: "100%",
  },

  text: {
    fontSize: 20,
    textAlign: "center",
  },

  imageContainer: {
    position: "absolute",
    top: -50,
    right: -50,
  },

  ImageStyle: {
    width: 430,
    height: 430,
  },

  bottomImageContainer: {
    position: "absolute",
    bottom: -150,
    left: -60,
  },

  bottomImageStyle: {
    width: 300,
    height: 300,
  },
});
