import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notes from "../components/NotesList";
import ToDoList from "../components/ToDoList";
import * as React from "react";
import colors from "../assets/colors";
import { StyleSheet, Text, View, Platform } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faStickyNote,
  faListAlt,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";



const Tab = createBottomTabNavigator();

const MainNav = () => {
    
    return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: "absolute",
            bottom: 25,
            left: 25,
            right: 25,
            elevation: 0,

            backgroundColor: colors.gray,
            borderRadius: 20,
            height: 80,
            ...styles.shadow,
          },
        }}
      >
        <Tab.Screen
          name="Notes"
          component={Notes}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.navItem}>
                <FontAwesomeIcon
                  style={styles.icon}
                  icon={faStickyNote}
                  size={30}
                  color={!focused ? colors.primary : colors.secondary}
                />
                <Text
                  style={{
                    ...styles.navItemTitle,
                    color: !focused ? colors.primary : colors.secondary,
                  }}
                >
                  Notes
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="AddItem"
          component={ToDoList}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.navItem}>
                <FontAwesomeIcon
                  style={styles.icon}
                  icon={faPlusCircle}
                  size={30}
                  color={!focused ? colors.primary : colors.secondary}
                />
                <Text
                  style={{
                    ...styles.navItemTitle,
                    color: !focused ? colors.primary : colors.secondary,
                  }}
                >
                  ADD
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ToDoList"
          component={ToDoList}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.navItem}>
                <FontAwesomeIcon
                  style={styles.icon}
                  icon={faListAlt}
                  size={30}
                  color={!focused ? colors.primary : colors.secondary}
                />
                <Text
                  style={{
                    ...styles.navItemTitle,
                    color: !focused ? colors.primary : colors.secondary,
                  }}
                >
                  To-Do
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  navItem: {
    paddingTop: Platform.OS === "ios" ? 15 : 0,
    minWidth: 60,
    height: 80,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  navItemTitle: {
    fontSize: 25,
    lineHeight: 30,
    color: colors.primary,
    fontWeight: "bold",
  },
});

export default MainNav;