import React from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../config/colors.js";

function ListItemDeleteAction({ onPress }) {
  //YOU CAN FIND THIS COMPONENT IN LISTSCREEN.JS LINE 92
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>What is this feature?</Text>
        <MaterialCommunityIcons name="alien" size={20} color={Colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    width: "100%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
  },

  text: {
    color: "#FFF",
    fontSize: 10,
  },
});
export default ListItemDeleteAction;
