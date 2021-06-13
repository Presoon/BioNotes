import React from "react";
import { Text, View, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faListAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import colors from "../../assets/colors.js";
import styles from "./styles.js";
import ContentContainer from "../ContentContainer/index.js";
import { useState } from "react";
import { useEffect } from "react";
import listService from "../../services/list-service";
const ListCover = (props) => (
  <View style={styles.listCover}>
    <View style={styles.listHeader}>
      <FontAwesomeIcon
        style={styles.icon}
        icon={faListAlt}
        size={25}
        color={colors.primary}
      />
      <Text style={styles.listTitle}>{`${props.title}`}</Text>
    </View>
    {props.content?.map((task, index) => (
      <Text style={styles.taskItem} key={index}>
        - {task}
      </Text>
    ))}

    <View
      style={{
        position: "absolute",
        right: 20,
        top: 25,
      }}
    >
      <Pressable
        onPress={async () => {
          await listService.deleteList(props.id);
          await props.refresh();
        }}
      >
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

function ToDoList() {
  const [lists, setLists] = useState([]);
  const getLists = async () => {
    var newLists = await listService.getLists().then();
    setLists(newLists);
  };
  useEffect(() => {
    getLists();
  }, []);
  return (
    <ContentContainer>
      <View style={styles.listContainer}>
        <Pressable
          style={styles.noteButton}
          onPress={async () => {
            await getLists().then();
          }}
        >
          <Text style={styles.buttonTitle}>REFRESH</Text>
        </Pressable>
        <Pressable
          style={styles.noteButton}
          onPress={async () => {
            await listService.clearLists().then();
            await getLists().then();
          }}
        >
          <Text style={styles.buttonTitle}>DELETE ALL LISTS</Text>
        </Pressable>
        
        {lists?.map((list, index) => (
          <ListCover
            key={index}
            id={index}
            refresh={getLists}
            title={`${index + 1}. ${list.title}`}
            content={list.tasks}
          />
        ))}
      </View>
    </ContentContainer>
  );
}

export default ToDoList;
