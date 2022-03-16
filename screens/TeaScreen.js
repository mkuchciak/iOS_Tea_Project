import React from 'react';
import {View, Text, Button, StyleSheet, Image, StatusBar, ScrollView, Pressable} from 'react-native';
import ListTea from '../components/ListTea';
import ListTeaItem from '../components/ListTeaItem';


const TeaScreen = ({route, navigation}) => {

    const {teaName, description, temp, minTime, maxTime, onPress, id, scr} = route.params.tea;

    return (
        <ScrollView>
        <View style={styles.container}>
            
            <Text style={styles.title}>{teaName}</Text>
            <Image 
                style={styles.picture}
                source={scr}
            />
            <View style={styles.iconsBar}>
                <View style={styles.iconTextConnector}>
                    <Image 
                        style={styles.icon}
                        source={require('../icons/temperature.png')}
                    />
                     <Text>{temp}°C</Text>
                </View>

                <Image 
                    style={styles.icon}
                    source={require('../icons/heart.png')}
                />

                <View style={styles.iconTextConnector}>
                    <Pressable 
                        onPress={() => navigation.navigate('Timer', {time: maxTime})}
                    >
                    <Image 
                        style={styles.icon}
                        source={require('../icons/hourglass.png')}
                    />
                    <Text>{minTime}-{maxTime} min</Text>
                    </Pressable>
                </View>
            </View>
            
            <Text style={styles.description}>{description}</Text>
            
        </View>
        </ScrollView>
        
    );
};

export default TeaScreen;

const styles = StyleSheet.create({
    container: {
        //top: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',   
    },
    title: {
        width: '100%',
        fontSize: 50,
        textAlign: 'center',
        padding: 50
    },
    picture: {
        width: 200,
        height: 200,
    },
    iconsBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconTextConnector: {
        padding: 30
    },
    icon: {
        width: 50,
        height: 50,
    },
    description: {
        fontSize: 25,
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: 'justify'
    }
})