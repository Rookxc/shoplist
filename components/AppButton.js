import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Colors } from "../config/colors.js";

function AppButton({ btnText, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[
          Colors.gradientLight,
          Colors.gradientMedium,
          Colors.gradientDark,
        ]}
        style={styles.btnContainer}
      >
        <Text style={styles.btnText}>{btnText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: "80%",
    backgroundColor: Colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 13,

    marginVertical: 30,
  },

  btnText: {
    color: "#FFF",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AppButton;
