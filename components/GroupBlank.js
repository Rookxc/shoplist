import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "../config/colors.js";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

function GroupBlank({ icon }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <MaterialCommunityIcons
          name={"image-plus"}
          size={30}
          color={Colors.gradientMedium}
        />
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <TextInput
          placeholder={"Name of the group"}
          placeholderTextColor="#b8b8b8"
          style={{ fontWeight: "bold", fontSize: 20 }}
        />
        <Text style={{ color: "#b8b8b8" }}>0 members</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },

  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },

  icon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: Colors.gradientDark,
    borderWidth: 2,
    marginRight: 10,

    justifyContent: "center",
    alignItems: "center",
  },
});
export default GroupBlank;
