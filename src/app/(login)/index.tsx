import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../../constants/colors";
import React from "react";
import AppTextInput from "../../../component/AppTextInput";
import AppButton from "../../../component/AppButton";

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={styles.container}>
        <Text style={styles.text}>Ready to stream?</Text>
        <View style={styles.inputwrapper}>
        <AppTextInput placeholder="Enter your email" />
      </View>
      <View style={styles.inputwrapper}>
        <AppTextInput placeholder="Enter your password" secureTextEntry />
      </View>
        <AppButton style={{backgroundColor: Colors.primary, width: "100%", height: 50}}title="login" />    
        <Text style={styles.createaccount}>Haven't signed up yet? 
          <Text style={{color: Colors.primary}}> Create Account</Text></Text> 
      </View>  
    </SafeAreaView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "600",
    color: Colors.text,
    fontSize: 40,
    marginBottom: 40,
  },
  inputwrapper: {
    width: "100%",
    marginVertical: 4,
  },
  createaccount: {
    color: Colors.gray,
    fontSize: 14,
    marginTop: 14,
  }
});
