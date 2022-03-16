import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen.js';
import TeaScreen from '../screens/TeaScreen.js';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
    return (
        <HomeStack.Navigator  screenOptions={{headerShown: false, tabBarShowLabel: false}}>
            
            <HomeStack.Screen name="Home" component={HomeScreen} /> 
            <HomeStack.Screen name="Tea" component={TeaScreen} />           
        </HomeStack.Navigator>
    );
};

export default HomeStackScreen;

const styles = StyleSheet.create({
    container: {
        //top: StatusBar.currentHeight,
        top: '4%'
        
    },
})