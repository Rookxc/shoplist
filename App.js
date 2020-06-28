import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function Login() {

  //const [value, onChangeText] = React.useState('Text 1');
  //const [value2, onChangeText2] = React.useState('Text 2');

  return (
    <React.Fragment>

      <View style={styles.container}>
        <Text style={styles.SignIn}> Sign In</Text>
        <StatusBar style="auto" />
      </View>

      <TextInput style={styles.txtEmail}
      //INSERT YOUR CODE FOR TEXTBOX HERE
      //onChangeText={text => onChangeText(text)}
      //value={value}
      />

      <TextInput secureTextEntry={true} style={styles.txtPassword}
      //INSERT YOUR CODE FOR TEXTBOX HERE
      //onChangeText={text => onChangeText(text)}
      //value={value}
      />

      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Sign in</Text>
      </TouchableOpacity>


    </React.Fragment>

  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: 275,
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

  txtPassword: {
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
  }
});
