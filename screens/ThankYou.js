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
import topRight from '../assets/topRight.png';
import bottomLeft from '../assets/bottomLeft.png';

export default function Login({ navigation }) {
    const [isSelected, setSelection] = React.useState(false);

    return (
        <React.Fragment>
            <View style={styles.imageContainer}>
                <Image source={topRight} style={styles.ImageStyle} />
            </View>

            <View style={styles.container}>
                <Text style={styles.thanks}> Thank you for registering!</Text>
                <StatusBar style="auto" />
            </View>
            <View style={styles.container2}>
                <Text style={styles.text}> This app is made and designed by  <Text style={styles.names}>Brandon & Rookxc!</Text>{"\n"}Logo made by <Text style={styles.names}>Dooxer</Text>.</Text>
                <StatusBar style="auto" />
            </View>


            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>Continue to app</Text>
            </TouchableOpacity>

            <View style={styles.bottomImageContainer}>
                <Image source={bottomLeft} style={styles.bottomImageStyle} />
            </View>

        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        marginTop: 370,
        marginLeft: 50,
        marginRight: 50,

        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: Colors.white,
        alignItems: "center",
        justifyContent: "center",
    },

    container2: {
        //flex: 1,
        marginTop: 5,
        marginLeft: 50,
        marginRight: 50,

        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: Colors.white,
        alignItems: "center",
        justifyContent: "center",
    },

    names: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
    },

    thanks: {
        fontSize: 30,
        fontWeight: "bold",
    },

    text: {
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center',
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

    imageContainer: {
        position: 'absolute',
            top: -50,
            right: -50,
    },

    ImageStyle: {
        width: 430,
        height: 430,
    },

    bottomImageContainer:{
        position: 'absolute',
            bottom: -150,
            left: -60,
    },

    bottomImageStyle:{
        width: 300,
        height: 300,
    },
});
