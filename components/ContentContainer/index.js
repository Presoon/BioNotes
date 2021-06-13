import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';
import colors from '../../assets/colors.js';
import styles from './styles.js';
import Header from '../Header';

const ContentContainer = ({ children }) => (
  <LinearGradient
    colors={[colors.gradient1, colors.gradient2]}
    style={styles.linearGradient}
  >
    <StatusBar style="light" />
    <Header />
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  </LinearGradient>
);

export default ContentContainer;
