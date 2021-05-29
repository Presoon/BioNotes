import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PButton from "./components/PButton.js";
import * as LocalAuthentication from "expo-local-authentication";
import Storage from "./services/storage.js";

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [data, setData] = useState("Brak autoryzacji");
  const [storage, setStorage] = useState();

  //sprawdzenie czy jest w telefonie ustawione zabezpieczanie biometryczne
  // useEffect(() => {
  //   const GetData = async () => {
  //     await LocalAuthentication.isEnrolledAsync().then((res) => setData(res));
  //   };
  //   GetData();
  // }, []);

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
  };

  return (
    <LinearGradient
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
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
