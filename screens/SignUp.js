import { StatusBar } from "expo-status-bar";
import React from "react";
import CheckBox from "react-native-custom-checkbox";
import { StyleSheet, Text, View, Linking } from "react-native";

import { Colors } from "../config/colors.js";

import TextBox from "../components/TextBox";
import AppButton from "../components/AppButton.js";

export default function Login({ navigation }) {
  const [isSelected, setSelection] = React.useState(false);

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.SignIn}> Sign Up</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.txtBox}>
        <TextBox
          placeholder="Enter Your Username Here"
          iconName={"account"}
          secureTextEntry={false}
        />
      </View>

      <View style={styles.txtBox}>
        <TextBox
          placeholder="Enter Your Email Here"
          iconName={"email"}
          secureTextEntry={false}
        />
      </View>

      <View style={styles.txtBox}>
        <TextBox
          placeholder="Enter Your Password Here"
          iconName={"lock"}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.chkBoxAgreement}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.txtAgreement}>
          I agree with
          <Text //replace google.com z drugim oknom (Forgot password recovery)
            style={styles.txtTermsAndConditions}
            onPress={() => Linking.openURL("https://google.com")}
          >
            {" "}
            Terms & Conditions
          </Text>
        </Text>
      </View>

      <AppButton btnText={"Create account"} />

      <View style={styles.txtNewAccount}>
        <Text>
          {" "}
          Already have an account?
          <Text //replace google.com z drugim oknom (Registracija)
            style={styles.txtTermsAndConditions}
            onPress={() => navigation.navigate("SignUp")}
          >
            {" "}
            Sign in!
          </Text>
        </Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "45%",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },

  SignIn: {
    fontSize: 50,
    fontWeight: "bold",
  },

  txtBox: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: "5%",
  },

  chkBoxAgreement: {
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    flexDirection: "row",
    marginBottom: 20,

    justifyContent: "center",
    alignItems: "center",
  },

  checkbox: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    color: Colors.bluish,
    borderColor: Colors.bluish,
    borderRadius: 7,
  },

  txtAgreement: {
    margin: 8,
  },

  txtTermsAndConditions: {
    color: Colors.primary,
  },

  txtNewAccount: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: "7%",
  },
});
