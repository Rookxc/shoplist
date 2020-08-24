import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, FlatList, SafeAreaView, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "../config/colors.js";
import Screen from "../components/Screen";
import TextBoxWBtn from "../components/TextBoxWBtn.js";
import ListOfItems from "../components/ListOfItems.js";
import Constants from "expo-constants";

import ListItemDeleteAction from "../components/ListItemDeleteAction";
import NoIdeaForTheFeature from "../components/NoIdeaForTheFeature";

const itemsToBuy = [
  {
    id: "0001",
    name: "Maslo",
    numberOfItems: "2",
    category: "Groceries",
  },
  {
    id: "0002",
    name: "Kruh",
    numberOfItems: "2",
    category: "Groceries",
  },
  {
    id: "0003",
    name: "Vodka",
    numberOfItems: "8",
    category: "Groceries",
  },
];

export default function Login({ navigation }) {
  return (
    <Screen>
      <View style={styles.list}>
        {/*Category (needs backend to sort)*/}
        <View style={styles.category}>
          <Text style={styles.categoryText}>Groceries</Text>
          <MaterialCommunityIcons name="minus" style={styles.show} />
        </View>

        {/*Items*/}
        <FlatList
          data={itemsToBuy}
          keyExtractor={(itemsToBuy) => itemsToBuy.id}
          renderItem={({ item }) => (
            <ListOfItems name={item.name} numberOfItems={item.numberOfItems} />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  show: {
    alignSelf: "center",
  },

  category: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },

  categoryText: {
    fontWeight: "bold",

    padding: 20,
    fontSize: 40,
  },

  list: {
    height: "100%",
    //backgroundColor: "yellow",
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
