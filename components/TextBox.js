import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../config/colors.js";

function TextBox({ placeholder, iconName, secureTextEntry, onChange, type }) {
  const [text, setText] = useState("");
  function handleOnChange(text) {
    setText(text);

    onChange(text);
  }
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={iconName}
        size={40 * 0.5}
        color={Colors.bluishLight}
        style={styles.ImageStyle}
      ></MaterialCommunityIcons>
      <TextInput
        style={styles.textbox}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        underlineColorAndroid="transparent"
        onChangeText={(text) => handleOnChange(text)}
        defaultValue={text}
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
    marginLeft: 3,
  },

  ImageStyle: {
    padding: 5,
    marginLeft: -16,
    marginBottom: 1,
    marginTop: 3,

    height: 30,
    width: 30,

    alignItems: "center",
  },
});
export default TextBox;
