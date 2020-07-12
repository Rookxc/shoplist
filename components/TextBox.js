import React from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";

import { Colors } from "../config/colors.js";

function TextBox({ placeholder, imageSource, secureTextEntry }) {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.ImageStyle} />
      <TextInput
        style={styles.textbox}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: "80%",

    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    paddingLeft: 20,

    borderColor: Colors.bluish,
    borderWidth: 2,
    borderRadius: 25,
  },

  textbox: {
    flex: 1,
    marginLeft: 8,
  },

  ImageStyle: {
    padding: 5,
    marginLeft: -16,
    marginBottom: 1,
    marginTop: 3,

    height: 30,
    width: 30,

    resizeMode: "stretch",
    alignItems: "center",
  },
});
export default TextBox;
