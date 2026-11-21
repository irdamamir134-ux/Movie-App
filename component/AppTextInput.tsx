import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Colors from '../constants/colors'; 

export default function AppTextInput() {
  return (
    <View style={styles.wrapper}>
      <TextInput style={styles.input}/>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {

    width: "390%",
    borderWidth: 1,
    height: 50,
    borderColor: Colors.darkBorder,
    borderRadius: 8,
    backgroundColor: "#292727f7",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    },
  input: {
    flex: 1,
    color: Colors.text,
    
  }
});