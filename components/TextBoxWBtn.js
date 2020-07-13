import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../config/colors.js";
import AppButton from "./AppButton.js";

function TextBoxWBtn({ placeholder, buttonText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textbox}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "90%",

    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    paddingLeft: 20,

    borderColor: Colors.bluish,
    borderWidth: 2,
    borderRadius: 25,
  },

  button: {
    width: "30%",
    height: 40,
    borderColor: Colors.bluish,
    borderWidth: 2,
    borderRadius: 25,

    backgroundColor: Colors.gradientMedium,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    marginRight: 5,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  textbox: {
    flex: 1,
    marginLeft: 3,
    fontSize: 20,
  },
});
export default TextBoxWBtn;
