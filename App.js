import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './navigation/MainNav';

const authorize = async () => {
  const result = await LocalAuthentication.authenticateAsync(
    (options = {
      promptMessage: 'Zaloguj się do BioNotes!',
      cancelLabel: 'Anuluj',
    }),
  ).then((res) => res);
  return result;
};

export default function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [message, setMessage] = useState('');

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
        } else if (result?.message) {
          setMessage(`Authorization Failed!${result.message}`);
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

