import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";


const AppButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.wrapper}>
    <View style={{flexDirection: "row"}}>
      <Text style={{color: "black", fontWeight: "600", marginRight: 6}}>Login</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    borderWidth: 1,
    height: 45,
    borderColor: Colors.darkBorder,
    borderRadius: 50,
    backgroundColor: "#FCC252",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
});
