//TODO
import React, { useState } from "react";
import { View, StyleSheet, Text, Switch, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import User from "../components/User";

import { Colors } from "../config/colors.js";

function AccountScreen(props) {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(true);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
  return (
    <Screen style={styles.container}>
      <User
        name="Rok Šekoranja"
        email="rok.sekoranja@student.um.si"
        image={require("../assets/rokprofile.jpg")}
      ></User>

      <View style={styles.divider} />

      <View style={styles.containerSettings}>
        <View style={styles.notifications}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <MaterialCommunityIcons
              name="bell"
              color={Colors.gradientDark}
              size={25}
              style={{ marginLeft: 10 }}
            />
            <Text style={{ marginLeft: 12 }}>Notifications</Text>
          </View>
          <View>
            <Switch
              trackColor={{
                false: Colors.gradientLighter,
                true: Colors.gradientDark,
              }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ marginRight: 10 }}
            />
          </View>
        </View>

        <View style={styles.darktheme}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <MaterialCommunityIcons
              name="theme-light-dark"
              color={Colors.gradientDark}
              size={25}
              style={{ marginLeft: 10 }}
            />
            <Text style={{ marginLeft: 12 }}>Dark Theme</Text>
          </View>
          <View>
            <Switch
              trackColor={{
                false: Colors.gradientLighter,
                true: Colors.gradientDark,
              }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
              style={{ marginRight: 10 }}
            />
          </View>
        </View>

        <View style={styles.idontknow}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <MaterialCommunityIcons
              name="skull"
              color={Colors.gradientDark}
              size={25}
              style={{ marginLeft: 10 }}
            />
            <Text style={{ marginLeft: 12 }}>I don't know</Text>
          </View>
          <View>
            <Switch
              trackColor={{
                false: Colors.gradientLighter,
                true: Colors.gradientDark,
              }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch3}
              value={isEnabled3}
              style={{ marginRight: 10 }}
            />
          </View>
        </View>

        <View style={styles.darktheme}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <MaterialCommunityIcons
              name="helicopter"
              color={Colors.gradientDark}
              size={25}
              style={{ marginLeft: 10 }}
            />
            <Text style={{ marginLeft: 12 }}>Helicopter</Text>
          </View>
          <View>
            <Switch
              trackColor={{
                false: Colors.gradientLighter,
                true: Colors.gradientDark,
              }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
              style={{ marginRight: 10 }}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.logout}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <MaterialCommunityIcons
              name="logout"
              color={Colors.white}
              size={25}
              style={{ marginLeft: 10 }}
            />
            <Text style={{ marginLeft: 12, color: Colors.white }}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  containerSettings: {
    flex: 1,
  },

  divider: {
    marginTop: 50,
  },

  notifications: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#e0e0e0",
  },

  darktheme: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#f0f0f0",
  },

  idontknow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#e0e0e0",
  },

  logout: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#004466",
  },
});
export default AccountScreen;
