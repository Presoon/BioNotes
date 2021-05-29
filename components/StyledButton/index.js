import React from "react";
import styles from "./styles.js";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function PButton(props) {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}


