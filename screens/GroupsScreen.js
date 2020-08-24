//TODO
import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Group from "../components/Group";
function GroupsScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.groupContainer}>
        <Group
          title="Family"
          members="4 members"
          image={require("../assets/family.jpg")}
        />
      </View>
      <View style={styles.groupContainer}>
        <Group
          title="Tyrševa Gang"
          members="5 members"
          image={require("../assets/final.jpg")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},

  groupContainer: {
    marginVertical: 20,
  },
});
export default GroupsScreen;
