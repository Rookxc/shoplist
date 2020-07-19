import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";

import { Colors } from "../config/colors.js";
import Screen from "../components/Screen";
import TextBoxWBtn from "../components/TextBoxWBtn.js";
import AppList from "../components/AppList.js";
import Constants from "expo-constants";

import ListItemDeleteAction from "../components/ListItemDeleteAction";
import NoIdeaForTheFeature from "../components/NoIdeaForTheFeature";

const itemsToBuy = [
  {
    id: "0001",
    name: "Hobby beton",
    numberOfItems: "2",
  },
  {
    id: "0002",
    name: "Kruh",
    numberOfItems: "2",
  },
  {
    id: "0003",
    name: "Vodka",
    numberOfItems: "8",
  },
  {
    id: "0004",
    name: "Sladkor",
    numberOfItems: "5",
  },
  {
    id: "0005",
    name: "Med",
    numberOfItems: "2",
  },
  {
    id: "0006",
    name: "Jägermeister",
    numberOfItems: "6",
  },
  {
    id: "0007",
    name: "Med",
    numberOfItems: "2",
  },
  {
    id: "0008",
    name: "Jägermeistsfasfsafasfer",
    numberOfItems: "6",
  },
  {
    id: "0009",
    name: "Med",
    numberOfItems: "2",
  },
  {
    id: "0010",
    name: "Jägermeister",
    numberOfItems: "6",
  },
  {
    id: "0011",
    name: "Med",
    numberOfItems: "2",
  },
  {
    id: "0012",
    name: "Jägermeister",
    numberOfItems: "5",
  },
  {
    id: "0013",
    name: "Jägermeister",
    numberOfItems: "5",
  },
  {
    id: "0014",
    name: "Jägermeister",
    numberOfItems: "6",
  },
  {
    id: "0015",
    name: "Juice-Vodka",
    numberOfItems: "6",
  },
];

export default function Login({ navigation }) {
  return (
    <Screen>
      <View style={styles.list}>
        <FlatList
          data={itemsToBuy}
          keyExtractor={(itemsToBuy) => itemsToBuy.id}
          renderItem={({ item }) => (
            <AppList
              name={item.name}
              numberOfItems={item.numberOfItems}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
              renderLeftActions={() => (
                <NoIdeaForTheFeature onPress={() => handleDelete(item)} />
              )}
            />
          )}
        />
      </View>
      <View style={styles.textbox}>
        <TextBoxWBtn placeholder="Name of item" buttonText="ADD" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    height: "90%",
  },

  textbox: {
    backgroundColor: "white",
    flexDirection: "row",
    width: "95%",
    position: "absolute",
    bottom: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignSelf: "center",
  },
});
