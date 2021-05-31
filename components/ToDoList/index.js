import React from "react";
import styles from "./styles.js";
import colors from "../../assets/colors.js";
import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faListAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import ContentContainer from "../ContentContainer/index.js";

const ListCover = (props) => {
  return (
    <View style={styles.listCover}>
      <View style={styles.listHeader}>
        <FontAwesomeIcon
          style={styles.icon}
          icon={faListAlt}
          size={25}
          color={colors.primary}
        />
        <Text style={styles.listTitle}>{"Lista ToDo " + props.title}</Text>
      </View>

      <Text>This is example list description...</Text>
      <Text>Click to show more info...</Text>

      {/* Do poprawy na dwa kontenery obo siebie */}
      <View style={{
        position: "absolute",
        right: 20,
        top: 35
      }}>
        <FontAwesomeIcon
          style={styles.icon}
          icon={faTrash}
          size={25}
          color={colors.secondary}
        />
      </View>
    </View>
  );
};

function ToDoList() {
  return (
    <ContentContainer>
      <View style={styles.listContainer}>
        {console.log("Renderuję listę")}
        <ListCover title="1" />
        <ListCover title="2" />
        <ListCover title="3" />
        <ListCover title="4" />
      </View>
    </ContentContainer>
  );
}

export default ToDoList;
