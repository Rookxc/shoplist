import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";

function Group({ title, members, image, moreIcon }) {
  return (
    <Screen>
      <TouchableOpacity>
        <View style={styles.container}>
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{title}</Text>
            {members && <Text>{members}</Text>}
          </View>
        </View>
      </TouchableOpacity>
    </Screen>
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
    marginRight: 10,
  },
});
export default Group;
