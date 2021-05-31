import styles from "./styles.js";
import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>BioNotes</Text>
      <FontAwesomeIcon icon={faBars} size={35} color={'white'}/>
    </View>
  );
}

export default Header;