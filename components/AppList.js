import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../config/colors.js";

function AppList({ name, numberOfItems, onPress }) {
  return (
    <TouchableHighlight style={styles.mainContainer}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.itemText}>{name}</Text>
        <Text style={styles.itemNumber}>{numberOfItems}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 10,
    backgroundColor: Colors.skyblue,
    width: "90%",
    height: 50,

    justifyContent: "center",
    alignSelf: "center",

    borderColor: Colors.bluish,
    borderWidth: 2,
    borderRadius: 15,
  },

  itemText: {
    marginLeft: 20,
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  itemNumber: {
    marginRight: 20,
    //color: "white",
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AppList;
