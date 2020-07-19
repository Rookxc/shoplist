import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Colors } from "../config/colors";

function Screen({ style, children }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight + 4,
    backgroundColor: Colors.white,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
