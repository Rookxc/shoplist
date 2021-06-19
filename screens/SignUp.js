import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import CheckBox from "react-native-custom-checkbox";
import { StyleSheet, Text, View, Linking } from "react-native";
import axios from "axios";
import { Colors } from "../config/colors.js";

import TextBox from "../components/TextBox";
import AppButton from "../components/AppButton.js";
import Toast from "react-native-toast-message";

export default function Login({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  function handleRegister() {
    const data = {
      name,
      email,
      password,
    };

    if (name !== "" && email !== "" && password != "") {
      console.log(isSelected);
      if (isSelected == true) {
        axios
          .post("http://192.168.0.16:3000/api/users", data)
          .then((res) => {
            console.log(res);
            navigation.navigate("Login");
            Toast.show({
              type: "success",
              text1: "Success!",
              text2: "Registration was successful.",
              position: "bottom",
            });
          })
          .catch((err) => {
            console.log(err.response.status);
            if (err.response.status === 500) {
              setError("Something went wrong...");
              console.log(err.response.status);
            } else if (err.response.status === 400) {
              setError("This user already exists");
            }

            //setError(err);
          });
      } else setError("You must agree to the terms and conditions!");
    } else setError("You must enter data in all the fields!");
  }
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
          onChange={(name) => setName(name)}
        />
      </View>

      <View style={styles.txtBox}>
        <TextBox
          placeholder="Enter Your Email Here"
          iconName={"email"}
          secureTextEntry={false}
          onChange={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.txtBox}>
        <TextBox
          placeholder="Enter Your Password Here"
          iconName={"lock"}
          secureTextEntry={true}
          onChange={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.chkBoxAgreement}>
        <CheckBox
          value={isSelected}
          onValueChange={(value) => console.log(value)}
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

      <AppButton btnText={"Create account"} onPress={handleRegister} />
      {error !== "" && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
      <View style={styles.txtNewAccount}>
        <Text>
          {" "}
          Already have an account?
          <Text //replace google.com z drugim oknom (Registracija)
            style={styles.txtTermsAndConditions}
            onPress={() => navigation.navigate("Login")}
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
  errorText: {
    color: Colors.danger,
  },
  errorContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
