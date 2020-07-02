import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  CheckBox,
  Linking,
  Image,
} from "react-native";

import { Colors } from "../config/colors.js";
import emailIcon from '../assets/Email-Icon.png';
import passIcon from '../assets/lock-icon.png';

export default function Login({ navigation }) {
  const [isSelected, setSelection] = React.useState(false);

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.SignIn}> Sign In</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.txtEmail}>
        <Image source={emailIcon}
          style={styles.ImageStyle}
        />
        <TextInput
          style={styles.txtInput}
          placeholder="Enter Your Email Here"
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.txtPassword}>
        <Image source={passIcon}
          style={styles.ImageStyle}
        />
        <TextInput
          style={styles.txtInput}
          secureTextEntry={true}
          placeholder="Enter Your Password Here"
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.chkBoxForgotPassContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />

        <Text
          style={styles.txtRememberMe}
        //onPress={(CheckBox.onValueChange = { setSelection })}
        >
          Remember me? {isSelected ? "  👍" : "  👎"}
          <Text //replace google.com z drugim oknom (Forgot password recovery)
            style={styles.txtForgotPass}
            onPress={() => Linking.openURL("https://google.com")}
          >
            {"                    "}
            Forgot password?
          </Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Sign in</Text>
      </TouchableOpacity>

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
    //flex: 1,
    marginTop: 240,
    marginLeft: 50,
    marginRight: 50,

    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },

  SignIn: {
    fontSize: 50,
    fontWeight: "bold",
  },

  txtEmail: {
    flexDirection: "row",
    //Text align:
    paddingLeft: 20,

    //Textbox align:
    marginTop: 54,
    marginLeft: 50,
    marginRight: 50,
    height: 40,
    borderColor: Colors.secondary,
    borderWidth: 2,
    borderRadius: 25,

    //Shadow
    /*shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,*/
  },

  txtInput: {
    flex: 1,
    marginLeft: 8,
  },

  txtPassword: {
    flexDirection: "row",
    //Text align:
    paddingLeft: 20,

    //Textbox align:
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    height: 40,
    borderColor: Colors.secondary,
    borderWidth: 2,
    borderRadius: 25,

    //Shadow
    /*shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,*/
  },

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

  checkbox: {
    alignSelf: "center",
    //backgroundColor: "#04AFDA",
  },

  txtRememberMe: {
    margin: 8,
  },

  txtForgotPass: {
    color: Colors.primary,
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
