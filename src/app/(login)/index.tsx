import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../../constants/colors";
import React from "react";
import AppTextInput from "../../../component/AppTextInput";
import AppButton from "../../../component/AppButton";
import {useRouter} from "expo-router"

const LoginScreen = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={styles.container}>
        <Text style={styles.text}>Ready to stream?</Text>
        <View style={styles.inputwrapper}>
        <AppTextInput placeholder="Email Address" />
        <AppTextInput placeholder="Password" secureTextEntry />
        <Text style={styles.forget}>Forgot Password</Text>
      </View>
        <AppButton 
        onPress={()=>router.push("/(tabs)/(home)")} 
        style={{backgroundColor: Colors.primary, width: "100%", height: 50}}title="Login" />    
        <Text style={styles.createaccount}>Haven't signed up yet? 
          <Text onPress={()=>router.push("/sign-up")}style={{color: Colors.primary}}> Create Account</Text></Text> 
      </View>  
    </SafeAreaView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "600",
    color: Colors.text,
    fontSize: 30,
    marginBottom: 30,
  },
  inputwrapper: {
    width: "100%",
    marginVertical: 4,
  },
  createaccount: {
    color: Colors.gray,
    fontSize: 14,
    marginTop: 14,
  },
  forget: {
    fontSize: 12,
    color: Colors.gray,
    alignSelf: "flex-end",
    marginBottom: 14
  }
});
