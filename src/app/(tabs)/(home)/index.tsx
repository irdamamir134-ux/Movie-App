import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from "../../../../constants/colors";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});