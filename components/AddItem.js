import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../config/colors.js";

function AddItem({ placeholder }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textbox}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity style={styles.addContainer}>
        <MaterialCommunityIcons
          name="plus"
          size={35}
          color="white"
          style={{ alignSelf: "center" }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    flexDirection: "row",
    backgroundColor: Colors.bluish,
    height: 50,
    width: 50,
    borderRadius: 35,

    alignSelf: "center",
    justifyContent: "center",
  },

  container: {
    justifyContent: "space-between",

    height: 50,
    width: "93%",

    //justifyContent: "center",
    //alignSelf: "center",
    flexDirection: "row",
    paddingLeft: 20,

    borderColor: Colors.bluish,
    borderWidth: 2,
    borderRadius: 25,

    marginLeft: 15,
    marginBottom: 20,
  },

  textbox: {
    flex: 1,
    marginLeft: 3,

    fontSize: 17,
  },
});
export default AddItem;
