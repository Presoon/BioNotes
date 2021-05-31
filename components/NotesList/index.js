import React from "react";
import styles from "./styles.js";
import colors from "../../assets/colors.js";
import { Text, View} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import ContentContainer from "../ContentContainer";
const NoteCover = (props) => {
  return (
    <View style={styles.noteCover}>
      <View style={styles.noteHeader}>
        <FontAwesomeIcon
          style={styles.icon}
          icon={faStickyNote}
          size={25}
          color={colors.primary}
        />
        <Text style={styles.title}>{"Notatka " + props.title}</Text>
      </View>

      <Text>This is example note...</Text>
      <Text>Click to show more info...</Text>
    </View>
  );
};

function NotesList() {
  return (
    <ContentContainer>
      <View style={styles.notesContainer}>
        {console.log("Renderuję notatki")}
        <NoteCover title="1" />
        <NoteCover title="2" />
        <NoteCover title="3" />
        <NoteCover title="4" />
        <NoteCover title="5" />
        <NoteCover title="6" />
        <NoteCover title="7" />
        <NoteCover title="8" />
        <NoteCover title="8" />
        <NoteCover title="8" />
        <NoteCover title="8" />
        <NoteCover title="8" />
        <NoteCover title="8" />
        <NoteCover title="8" />
        <NoteCover title="8" />
        <NoteCover title="8" />
        <NoteCover title="8" />
        <NoteCover title="8" />
        <NoteCover title="8" />
      </View>
    </ContentContainer>
  );
}

export default NotesList;
