import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListTeaItem from './components/ListTeaItem';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
import 'react-native-gesture-handler';

export default function App() {
  return ( 
    <Tabs/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
