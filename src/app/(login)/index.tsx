import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../../constants/colors'; 
import React from "react";
import AppTextInput from "../../../component/AppTextInput";

const LoginScreen = () => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: Colors.background}}>
            <View style={styles.container}>
                <Text style={styles.text}>Streaming</Text>
            </View>
            <View style={styles.inputwrapper}>
                <AppTextInput/>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen
const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:14,
        alignItems:"center",
        justifyContent:"center",
    },
    text: {
        fontWeight: "600",
        color: "yellow",
        fontSize: 50,
    },
    inputwrapper: {
        width: "100",
        marginVertical: 26,
    }

})