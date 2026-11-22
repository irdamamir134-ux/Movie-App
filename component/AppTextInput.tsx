import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";
import Colors from "../constants/colors";

const AppTextInput: React.FC<TextInputProps> = ({ ...props }) => {
  return (
    <View style={styles.wrapper}>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

export default AppTextInput;
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    borderWidth: 1,
    height: 50,
    borderColor: Colors.darkBorder,
    borderRadius: 8,
    backgroundColor: "#101010f7",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    color: Colors.text,
  },
});
