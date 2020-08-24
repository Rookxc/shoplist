import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../config/colors.js";

function MoreDetailsGroup({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="cogs" size={35} color={Colors.black} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 2,
    marginRight: 25,
  },
});
export default MoreDetailsGroup;
