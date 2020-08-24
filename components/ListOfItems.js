import React, { useState } from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";

import {
  View,
  StyleSheet,
  Text,
  CheckBox,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../config/colors.js";

function AppList({
  name,
  category,
  numberOfItems,
  onPress,
  renderRightActions,
  renderLeftActions,
}) {
  const [isSelected, setSelection] = useState(false);

  return (
    <View>
      <View style={styles.items}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{ true: "#1C81D1", false: "black" }}
        />
        <Text style={styles.item}>
          {name} ({numberOfItems})
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  items: {
    flexDirection: "row",
    flexWrap: "wrap",

    paddingLeft: 40,
  },

  item: {
    fontSize: 19,
    alignSelf: "center",
  },
});
export default AppList;
