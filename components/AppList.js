import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";

import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../config/colors.js";

function AppList({
  name,
  numberOfItems,
  onPress,
  renderRightActions,
  renderLeftActions,
}) {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      <TouchableHighlight
        style={styles.mainContainer}
        underlayColor={Colors.gradientDark}
      >
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
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FFF",
    marginBottom: 10,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
    borderColor: Colors.white,
    borderBottomColor: Colors.bluish,
    borderWidth: 1,
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
