import React from "react";

import { Text, StyleSheet, TouchableOpacity } from "react-native";

const ButtonComponent = ({ text, colorText, onPress, zero }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={zero ? styles.zeroContainer : styles.container}
    >
      <Text style={colorText ? styles.textLight : styles.textDark}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  zeroContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  textLight: {
    fontSize: 34,
  },
  textDark: {
    fontSize: 34,
  }
});
export default ButtonComponent;
