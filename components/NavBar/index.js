import styles from "./styles.js";
import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCogs, faStickyNote, faListAlt, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import colors from "../../assets/colors.js";
const NavBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navItem}>
        <FontAwesomeIcon
          style={styles.icon}
          icon={faStickyNote}
          size={25}
          color={colors.primary}
        />
        <Text style={styles.itemName}>Notatki</Text>
      </View>
      <View style={styles.navItem}>
        <FontAwesomeIcon
          style={styles.icon}
          icon={faListAlt}
          size={25}
          color={colors.primary}
        />
        <Text style={styles.itemName}>Lista</Text>
      </View>
      <View style={styles.navItem}>
        <FontAwesomeIcon
          style={styles.icon}
          icon={faInfoCircle}
          size={25}
          color={colors.primary}
        />
        <Text style={styles.itemName}>Info</Text>
      </View>
      <View style={{ ...styles.navItem, borderRightWidth: 0 }}>
        <FontAwesomeIcon
          style={styles.icon}
          icon={faCogs}
          size={25}
          color={colors.primary}
        />
        <Text style={styles.itemName}>Opcje</Text>
      </View>
    </View>
  );
};

export default NavBar;
