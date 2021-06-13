import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faListAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import colors from '../../assets/colors.js';
import styles from './styles.js';
import ContentContainer from '../ContentContainer/index.js';

const ListCover = (props) => (
  <View style={styles.listCover}>
    <View style={styles.listHeader}>
      <FontAwesomeIcon
        style={styles.icon}
        icon={faListAlt}
        size={25}
        color={colors.primary}
      />
      <Text style={styles.listTitle}>{`Lista ToDo ${props.title}`}</Text>
    </View>

    <Text>This is example list description...</Text>
    <Text>Click to show more info...</Text>

    {/* Do poprawy na dwa kontenery obo siebie */}
    <View style={{
      position: 'absolute',
      right: 20,
      top: 35,
    }}
    >
      <FontAwesomeIcon
        style={styles.icon}
        icon={faTrash}
        size={25}
        color={colors.secondary}
      />
    </View>
  </View>
);

function ToDoList() {
  return (
    <ContentContainer>
      <View style={styles.listContainer}>
        <Pressable
          style={styles.noteButton}
          onPress={async () => {
            await getNotes().then();
          }}
        >
          <Text style={styles.chooseTitle}>REFRESH</Text>
        </Pressable>
        <Pressable
          style={styles.noteButton}
          onPress={async () => {
            await notesService.clearNotes().then();
            await getNotes().then();
          }}
        >
          <Text style={styles.chooseTitle}>DELETE ALL NOTES</Text>
        </Pressable>
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
