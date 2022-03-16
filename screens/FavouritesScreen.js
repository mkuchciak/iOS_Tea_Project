import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ListTea from '../components/ListTea';

const FavouritesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ListTea style={styles.list} nav={navigation}/>
        </View>
    );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
    container: {
        top: '4%',
        height: '124%'
    },
    list: {
        flex: 1
    }
})