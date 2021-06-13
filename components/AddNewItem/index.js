import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChooseAddItemType from '../ChooseAddItemType';
import AddNote from '../AddNote';
import AddList from '../AddList';

const ChooseStack = createStackNavigator();

const AddNewItem = () => (
  <ChooseStack.Navigator
    initialRouteName="Choose"
    screenOptions={{
      headerShown: false,
    }}
  >
    <ChooseStack.Screen name="Choose" component={ChooseAddItemType} />
    <ChooseStack.Screen name="AddNote" component={AddNote} />
    <ChooseStack.Screen name="AddList" component={AddList} />
  </ChooseStack.Navigator>
);

export default AddNewItem;
