import React from 'react';
import {
  Button, View, Pressable, Text,
} from 'react-native';
import styles from './styles.js';
import ContentContainer from '../ContentContainer/index.js';

const ChooseAddItemType = ({ navigation }) => (
  <ContentContainer>
    <View style={{
      justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 80,
    }}
    >
      <Pressable
        style={styles.chooseButton}
        onPress={() => navigation.navigate('AddNote')}
      >
        <Text style={styles.chooseTitle}>NEW NOTE</Text>
      </Pressable>
      <Pressable
        style={styles.chooseButton}
        onPress={() => navigation.navigate('AddList')}
      >
        <Text style={styles.chooseTitle}>NEW LIST</Text>
      </Pressable>
    </View>
  </ContentContainer>
);

export default ChooseAddItemType;
