import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStickyNote, faTrash } from "@fortawesome/free-solid-svg-icons";
import colors from '../../assets/colors.js';
import styles from './styles.js';
import ContentContainer from '../ContentContainer';
import { useEffect } from 'react';
import { useState } from 'react';
import notesService from '../../services/notes-service.js';

const NoteCover = (props) => (
  <View style={styles.noteCover}>
    <View style={styles.noteHeader}>
      <FontAwesomeIcon
        style={styles.icon}
        icon={faStickyNote}
        size={25}
        color={colors.primary}
      />
      <Text style={styles.title}>{`${props.title}`}</Text>
    </View>

    <Text>{props.content}</Text>
    <View
      style={{
        position: "absolute",
        right: 20,
        top: 25,
      }}
    >
      <Pressable 
      onPress={ async () => {
        await notesService.deleteNote(props.id);
        await props.refresh();
      }}>
        <FontAwesomeIcon
          style={styles.icon}
          icon={faTrash}
          size={25}
          color={colors.secondary}
        />
      </Pressable>
    </View>
  </View>
);



function NotesList() {
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    var newNotes = await notesService.getNotes().then();
    setNotes(newNotes);
  };
  useEffect(() => {
    getNotes();
  }, [])
  return (
    <ContentContainer>
      <View style={styles.notesContainer}>
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
        {console.log("Renderuję notatki")}
        {notes?.map((note, index) => (
          <NoteCover
            key={index}
            id={index}
            refresh={getNotes}
            title={`${index + 1}. ${note.title}`}
            content={note.content}
          />
        ))}
      </View>
    </ContentContainer>
  );
}

export default NotesList;
