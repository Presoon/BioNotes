import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function PButton(props) {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "#4facfe",
  },
  text: {
    fontSize: 26,
    lineHeight: 34,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
