import { StatusBar } from "expo-status-bar";
import React from "react";

import CheckBox from "react-native-custom-checkbox";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";

import { Colors } from "../config/colors.js";
import emailIcon from "../assets/Email-Icon.png";
import passIcon from "../assets/lock-icon.png";

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
          imageSource={emailIcon}
          secureTextEntry={false}
        />
      </View>

      <View style={styles.txtPassword}>
        <TextBox
          style={styles.txtPassword}
          placeholder="Enter Your Password Here"
          imageSource={passIcon}
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
          <Text //replace google.com z drugim oknom (Registracija)
            style={styles.txtForgotPass}
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
  container: {
    marginTop: "55%",

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
    backgroundColor: "#f2f2f2",
    color: Colors.bluish,
    borderColor: Colors.bluish,
    marginRight: 10,
    paddingRight: 10,
    borderRadius: 7,
  },

  rememberMe: {
    flex: 1,
    flexDirection: "row",
  },

  //YES
  btnContainer: {
    marginTop: 40,
    marginLeft: 50,
    marginRight: 50,

    elevation: 8,
    backgroundColor: Colors.primary,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  btnText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  chkBoxForgotPassContainer: {
    marginLeft: 50,
    marginRight: 50,
    flexDirection: "row",
    marginBottom: 20,
  },

  txtRememberMe: {
    margin: 8,
  },

  txtForgotPass: {
    color: Colors.bluish,
  },

  txtNewAccount: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  ImageStyle: {
    padding: 5,
    marginLeft: -16,
    marginBottom: 1,
    marginTop: 3,
    //margin: 5,
    height: 30,
    width: 30,
    resizeMode: "stretch",
    alignItems: "center",
  },
});
