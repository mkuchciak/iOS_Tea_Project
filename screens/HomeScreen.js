import React from 'react';
import {View, Text, Button, StyleSheet, Image, StatusBar, Pressable} from 'react-native';
import ListTea from '../components/ListTea';
import ListTeaItem from '../components/ListTeaItem';
import TeaScreen from './TeaScreen.js';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={require('../pictures/front.jpg')}
            />
            <ListTea nav={navigation}/>
            
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        //top: StatusBar.currentHeight,
        top:'4%',
        
    }, 
    image: {
        width: '100%',
        height: '20%',
        resizeMode: 'cover'
    }
})