import React, { useState } from "react";
import { Button, View, Text, TextInput, Pressable, Alert } from "react-native";
import styles from "./styles.js";
import ContentContainer from "../ContentContainer/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import colors from "../../assets/colors.js";
import listService from "../../services/list-service.js";
const AddList = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const clearForm = () => {
    setTitle("");
    setTask("");
    setTasks([]);
  };

  return (
    <ContentContainer>
      <View style={styles.Container}>
        <Text style={styles.title}>ADD NEW LIST</Text>
        <TextInput
          style={styles.input}
          placeholder="List title"
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
        <Text style={styles.title}>Tasks:</Text>
        {tasks &&
          tasks.map((e, index) => {
            return (
              <Text key={index} style={styles.taskListItem}>
                {e}
              </Text>
            );
          })}
        <TextInput
          style={styles.inputm}
          placeholder="Add to-do task"
          onChangeText={(text) => setTask(text)}
          value={task}
          onSubmitEditing={() => {
            var newTasks = [...tasks];
            newTasks.push(task);
            setTasks(newTasks);
            setTask("");
          }}
        />
        <View style={{ paddingTop: 30, paddingLeft: 10 }}>
          <Pressable
            onPress={() => {
              var newTasks = [...tasks];
              newTasks.push(task);
              setTasks(newTasks);
              setTask("");
            }}
          >
            <FontAwesomeIcon
              style={styles.icon}
              icon={faPlus}
              size={25}
              color={colors.secondary}
            />
          </Pressable>
        </View>
        <Pressable
          style={styles.noteCover}
          onPress={async () => {
            await listService.addList(title, tasks).then();
            Alert.alert("New ToDo List", "Add new to-do list successfully!");
            clearForm();
          }}
        >
          <Text style={styles.buttonTitle}>SAVE LIST</Text>
        </Pressable>
        <Pressable
          style={styles.noteCover}
          onPress={() => {
            setTasks([]);
            setTitle("");
          }}
        >
          <Text style={styles.buttonTitle}>CLEAR ALL</Text>
        </Pressable>
      </View>
    </ContentContainer>
  );
};

export default AddList;
