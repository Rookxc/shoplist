import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "../config/colors.js";

function User({ name, email, image, moreIcon, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {image && <Image style={styles.image} source={image} />}
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{name}</Text>
        {email && <Text>{email}</Text>}
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

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: Colors.gradientDark,
    borderWidth: 2,
    marginRight: 10,
  },
});
export default User;
