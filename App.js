import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, CheckBox, Linking, Image } from 'react-native';

export default function Login() {

  //const [value, onChangeText] = React.useState('Text 1');
  //const [value2, onChangeText2] = React.useState('Text 2');
  const [isSelected, setSelection] = React.useState(false);

  return (
    <React.Fragment>

      <View style={styles.container}>
        <Text style={styles.SignIn}> Sign In</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.txtEmail}>
        <Image //SPREMENI URL NA LOCAL /ASSESTS/IMAGE
        source={{ uri: 'https://www.suitdoctors.com/wp-content/uploads/2015/11/Email-Icon.png',}} style={styles.ImageStyle} />
        <TextInput style={styles.txtInput}
          placeholder="Enter Your Email Here"
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.txtPassword}> 
        <Image //SPREMENI URL NA LOCAL /ASSESTS/IMAGE
        source={{ uri: 'https://www.festivalclaca.cat/imgfv/b/149-1492805_cyber-security-icon-png-lock-icon.png',}} style={styles.ImageStyle} />
        <TextInput style={styles.txtInput}
          placeholder="Enter Your Password Here"
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.chkBoxForgotPassContainer}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />

        <Text style={styles.txtRememberMe}>Remember me?   {isSelected ? "👍" : "👎"}

          <Text //replace google.com z drugim oknom (Forgot password recovery)
            style={styles.txtForgotPass} onPress={() => Linking.openURL('https://google.com')} >                   Forgot password?
        </Text></Text>
      </View>

      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.txtNewAccount}>
        <Text> Don't have an account?
          <Text //replace google.com z drugim oknom (Registracija)
            style={styles.txtForgotPass} onPress={() => Linking.openURL('https://google.com')} > Create one!
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  SignIn: {
    fontSize: 50,
    fontWeight: "bold"
  },

  txtEmail: {
    flexDirection: 'row',
    //Text align:
    paddingLeft: 20,

    //Textbox align:
    marginTop: 54,
    marginLeft: 50,
    marginRight: 50,
    height: 40,
    borderColor: "#13a5b0",
    borderWidth: 2,
    borderRadius: 25,

    //Shadow
    /*shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,*/
  },

  txtInput:{
    flex: 1,
    marginLeft: 8,
  },

  txtPassword: {
    flexDirection: 'row',
    //Text align:
    paddingLeft: 20,

    //Textbox align:
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    height: 40,
    borderColor: "#13a5b0",
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
    backgroundColor: "#13a5b0",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12
  },

  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

  chkBoxForgotPassContainer: {
    marginLeft: 50,
    marginRight: 50,
    flexDirection: "row",
    marginBottom: 20,
  },

  checkbox: {
    alignSelf: "center",
  },

  txtRememberMe: {
    margin: 8,
  },

  txtForgotPass: {
    color: '#1e83c7',
  },

  txtNewAccount: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  ImageStyle: {
    padding: 5,
    marginLeft: -16,
    marginBottom: 1,
    marginTop: 3,
    //margin: 5,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center'
  },

});
