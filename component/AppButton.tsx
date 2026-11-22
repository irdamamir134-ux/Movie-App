import React from "react";
import {
  ViewStyle,
  StyleProp,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/colors";

interface AppButtonProps {
  title: string;
  icon?: any;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
const AppButton = ({ title, icon, style, onPress }: AppButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.wrapper, style]}
    >
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "black", fontWeight: "600", marginRight: 6 }}>
          {title}
        </Text>
        {icon}
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    borderWidth: 1,
    height: 50,
    borderColor: Colors.darkBorder,
    borderRadius: 10,
    backgroundColor: "#2F78FF",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
