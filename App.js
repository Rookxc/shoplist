import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function UselessTextInput() {

  //const [value, onChangeText] = React.useState('Text 1');
  //const [value2, onChangeText2] = React.useState('Text 2');

  return (
    <React.Fragment>
      
      <View style={styles.container}>
        <Text style={styles.SignIn}> Sign In PLS WORK!</Text>
        <StatusBar style="auto" />
      </View>
     
      <TextInput style={styles.txtEmail} 
         //INSERT YOUR CODE FOR TEXTBOX HERE
          //onChangeText={text => onChangeText(text)}
         //value={value}
      />

      <TextInput secureTextEntry={true} style={styles.txtPassword} 
         //INSERT YOUR CODE FOR TEXTBOX HERE
         //onChangeText2={text => onChangeText(text)}
         //value2={value2}
      />
    </React.Fragment>

  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: 300,
    marginLeft: 50,
    marginRight: 50,

    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  SignIn:{
    fontSize: 20,
    fontWeight: "bold"
  },

  txtEmail:{
    //Text align:
    paddingLeft: 20,

    //Textbox align:
    marginTop: 80,
    marginLeft: 50,
    marginRight: 50,
    height: 40,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 25,

    //Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  txtPassword:{
    //Text align:
    paddingLeft: 20,

    //Textbox align:
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    height: 40,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 25,

    //Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
