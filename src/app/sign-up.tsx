import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/colors";
import React from "react";
import AppTextInput from "../../component/AppTextInput";
import AppButton from "../../component/AppButton";
import {useRouter} from "expo-router"


const SignupScreen = () => {
    const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={styles.container}>
        <Text style={styles.text}>Join the Stream</Text>
      <Text style={styles.sub}>"Discover your next favorite story"</Text>
        <View style={styles.inputwrapper}>
        <AppTextInput placeholder="Email Address" />
        <AppTextInput placeholder="Password" secureTextEntry />
      <Text style={styles.sub}>I agree to the terms of service and privacy policy</Text>
      </View>
        <AppButton style={{backgroundColor: Colors.primary, width: "100%", height: 50}}title="Create Account" />   
         <Text style={styles.login}>Already have an account? 
          <Text onPress={()=>router.push("/(login)")}style={{color: Colors.primary}}> Login Here</Text></Text>    
      </View>  
    </SafeAreaView>
  );
};

export default SignupScreen;
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
    marginBottom: 9,
  },
  inputwrapper: {
    width: "100%",
    marginVertical: 4,
  },
  login: {
    color: Colors.gray,
    fontSize: 14,
    marginTop: 14,
  },
  sub: {
    color: Colors.gray,
    fontSize: 12,
    marginBottom: 30
  }
});
