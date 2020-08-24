import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import { Colors } from "../config/colors.js";
import MoreDetailsGroup from "./MoreDetailsGroup";

function Group({
  title,
  members,
  image,
  moreIcon,
  renderRightActions,
  onPress,
}) {
  return (
    <Swipeable renderRightActions={MoreDetailsGroup}>
      <View style={styles.container}>
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{title}</Text>
          {members && <Text>{members}</Text>}
        </View>
      </View>
    </Swipeable>
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
export default Group;
