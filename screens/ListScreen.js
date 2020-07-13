import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from "react-native";

import { Colors } from "../config/colors.js";
import AppButton from "../components/AppButton.js";

import topRight from "../assets/topRight.png";
import bottomLeft from "../assets/bottomLeft.png";
import TextBoxWBtn from "../components/TextBoxWBtn.js";

const screenHeight = Math.round(Dimensions.get("window").height);

const polovicaEkranaJebemti = screenHeight / 2.5;

export default function Login({ navigation }) {
  const showAlert = () => {
    Alert.alert(
      "Are u sure?",
      "You are going to delete this items: {nameOfItems}",
      [
        {
          text: "YES",
          onPress: () => console.log("deleting from database"),
        },
        {
          text: "NO",
          onPress: () => console.log("returning to app"),
        },
      ]
    );
  };

  return (
    <React.Fragment>
      <View style={styles.textbox}>
        <TextBoxWBtn placeholder="Name of item" buttonText="ADD" />
        <TouchableOpacity style={styles.button} onPress={showAlert}>
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  textbox: {
    flexDirection: "row",
    width: "76%",
    position: "absolute",
    bottom: 20,

    justifyContent: "center",
    alignSelf: "center",
  },

  button: {
    width: "30%",
    height: 50,
    borderColor: Colors.dangerDark,
    borderWidth: 3,
    borderRadius: 25,

    backgroundColor: Colors.danger,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    marginRight: 5,
    marginLeft: 10,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
