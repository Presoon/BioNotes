import React from "react";
import { Button, View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles.js";
import ContentContainer from "../ContentContainer/index.js";
import { useState } from "react";
import Notes from "../../services/notes-service";

const AddNote = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const clearForm = () => {
    setTitle("");
    setContent("");
  };
  return (
    <ContentContainer>
      <View style={styles.Container}>
        <Text style={styles.title}>ADD NOTE SCREEN</Text>
        <TextInput
          style={styles.input}
          placeholder="Note title"
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
        <TextInput
          style={styles.inputm}
          multiline
          numberOfLines={15}
          editable
          maxLength={120}
          placeholder="Note content"
          onChangeText={(text) => setContent(text)}
          value={content}
        />

        <Pressable
          style={styles.noteCover}
          onPress={async () => {
            await Notes.addNote(title, content).then();
            clearForm();
          }}
        >
          <Text style={styles.chooseTitle}>NEW NOTE</Text>
        </Pressable>
      </View>
    </ContentContainer>
  );
};

export default AddNote;
