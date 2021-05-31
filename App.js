import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

import * as LocalAuthentication from "expo-local-authentication";
import Storage from "./services/storage.js";

import { NavigationContainer } from "@react-navigation/native";
import MainNav from "./navigation/MainNav.js";

const Separator = () => <View style={styles.separator} />;
const authorize = async () => {
  const result = await LocalAuthentication.authenticateAsync(
    (options = {
      promptMessage: "Zaloguj się do BioNotes!",
      cancelLabel: "Anuluj",
    })
  ).then((res) => {
    return res;
  });
  return result;
};

export default function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const login = async () => {
      const available = await LocalAuthentication.isEnrolledAsync().then();
      if (!available) {
        setIsUserLogged(true);
        return true;
      }
      if (!isUserLogged) {
        const result = await authorize();
        if (result?.success) {
          setIsUserLogged(true);
        } else {
          if (result?.message) {
            setMessage("Authorization Failed!" + result.message);
          }
        }
      }
    };
    login();
  }, [isUserLogged]);

  return (
    <>
      {isUserLogged ? (
        <NavigationContainer>
          <MainNav />
        </NavigationContainer>
      ) : (
        <Text>{message}</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

{
  /*  const [data, setData] = useState("Brak autoryzacji");
  const [storage, setStorage] = useState();

  const saveData = async () => {
    await Storage.storeData("data", { name: "alleluja" });
    console.log("zapisano dane");
  };

  const getData = async () => {
    const res = await Storage.getData("data");
    console.log("wczytano dane");
    setStorage(res);
  };

  const authorize = async () => {
    await LocalAuthentication.authenticateAsync().then((res) => {
      console.log(res);
      if (res?.success) {
        setData("Autoryzacja przebiegła pomyślnie!");
      } else {
        setData(
          "Autoryzacja zakończona niepowodzeniem! Error: " + res?.message
        );
      }
    });
  }; */
}
{
  /*<LinearGradient
      colors={["#fbc2eb", "#a6c1ee"]}
      style={(styles.linearGradient, styles.container)}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Apka! SIEMANO!</Text>
      <Text>{data}</Text>
      <Text>{console.log(data)}</Text>
      <Separator />
      <PButton
        title="AUTORYZUJ"
        onPress={() => {
          authorize();
        }}
      />
      <Separator />
      <PButton
        title="Zapisz string"
        onPress={() => {
          saveData();
          Alert.alert(
            "Zapisano string:",
            "alleluja",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
        }}
      />
      <Separator />
      <PButton
        title="Odczytaj string"
        onPress={() => {
          getData();
          Alert.alert(
            "Pobrano dane",
            storage?.name,
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
        }}
      />
      {console.log(storage)}
      <StatusBar style="auto" />
      </LinearGradient>*/
}
