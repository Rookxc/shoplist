//TODO
import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Group from "../components/Group";
import AppButton from "../components/AppButton";
import GroupBlank from "../components/GroupBlank";
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
      <View style={styles.groupContainer}>
        <GroupBlank />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  groupContainer: {
    marginVertical: 10,
  },
});
export default GroupsScreen;
