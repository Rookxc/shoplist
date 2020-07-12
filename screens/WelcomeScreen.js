import { StatusBar } from "expo-status-bar";
import React from "react";

import CheckBox from "react-native-custom-checkbox";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../config/colors.js";

import TextBox from "../components/TextBox";
import AppButton from "../components/AppButton.js";

export default function Login({ navigation }) {
  const [isSelected, setSelection] = React.useState(false);

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.SignIn}> Sign In</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.txtEmail}>
        <TextBox
          placeholder="Enter Your Email Here"
          iconName={"email"}
          secureTextEntry={false}
        />
      </View>

      <View style={styles.txtPassword}>
        <TextBox
          style={styles.txtPassword}
          placeholder="Enter Your Password Here"
          iconName={"lock"}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.secondContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.rememberMe}>Remember me</Text>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </View>

      <AppButton btnText={"Sign in"} />

      <View style={styles.txtNewAccount}>
        <Text>
          {" "}
          Don't have an account?
          <Text //replace z drugim oknom (Registracija)
            style={styles.txtCreateAccount}
            onPress={() => navigation.navigate("SignUp")}
          >
            {" "}
            Create one!
          </Text>
        </Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    backgroundColor: Colors.black,
  },

  container: {
    marginTop: "45%",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },

  secondContainer: {
    marginTop: 5,
    width: "77%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },

  SignIn: {
    fontSize: 50,
    fontWeight: "bold",
  },

  txtEmail: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: "10%",
  },

  txtPassword: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: "5%",
  },

  forgotPassword: {
    color: Colors.bluish,
  },

  checkbox: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    color: Colors.bluish,
    borderColor: Colors.bluish,
    borderRadius: 7,
  },

  rememberMe: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 5,
  },

  txtCreateAccount: {
    color: Colors.bluish,
  },

  txtNewAccount: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 25,
    right: 0,
    left: 0,
  },
});
