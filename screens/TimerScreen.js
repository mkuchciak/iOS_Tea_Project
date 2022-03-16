import React, {useState, useRef, useEffect, useFocusEffect, useLocation} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Countdown} from 'react-native-element-timer';

const TimerScreen = ({route, navigation}) => {
    
    const countdownRef = useRef(null);
    
    const [text, setText] = useState("START");
    
    const updateTime = () =>{
        let temp = parseFloat(route.params.time)*60; //w przypadku zwyklego generowania aplikacji pobieramy wartosc temp z domyslnego parametru lub z nawigacji z wybranej herbaty
        //temp = 0; //do testu 'button text after button press' temp musi rownac sie zeru badz innej liczbie ze względu na brak generowania domyślnego parametru przy inicjalizacji zakładki z herbatami
        ////click reset
        return temp;
    };

    const stopStartHandler = event => {
        if(text == "STOP"){
            setText("RESUME");
            countdownRef.current.pause();
        } 
        else if(text == "START"){
            setText("STOP");
            countdownRef.current.start();
        }
        else if(text == "RESUME"){
            setText("STOP");
            countdownRef.current.resume();
        }  
    };

    const resetHandler = event => {
        countdownRef.current.stop();
        setText("START");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text_top}>Minutnik</Text>
            <View style={styles.circle}>
                <Countdown
                    ref={countdownRef}
                    style={styles.timer}
                    textStyle={styles.text_timer}
                    initialSeconds={updateTime()} 
                    onTimes={e => {}}
                    onPause={e => {}}
                    onEnd={(e) => {}}
                />
            </View>
            <View style={styles.button_start}>
                <Button testId='button' title={text} color='black' style={styles.button_start} onPress={stopStartHandler}></Button>       
            </View>
            <View style={styles.button_reset}>
                <Button title='RESET' color='black' style={styles.button_reset} onPress={resetHandler}></Button>
            </View>
            <Text testId="myTEXT" style={{opacity: 0, position: 'absolute'}}>{text}</Text>
        </View>
    );
};

export default TimerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EFF3F1',
    },
    circle: {
        width: '90%',
        aspectRatio: 1,
        borderRadius: 500/2,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'grey',
        position: 'absolute',
    },
    text_top: {
        top: '10%',
        position: 'absolute',
        fontSize: 30,
        fontWeight: 'bold',
    },
    timer: {
        top: '40%',
    },
    text_timer: { 
        fontSize: 60,
        textAlign: 'center',
    },
    button_start: {
        backgroundColor: 'white',
        top: '37%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'grey',
        width: 150,
    },
    button_reset: {
        backgroundColor: 'white',
        top: '39%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'grey',
        width: 100,
    },
    input: {
        top: '40%',
        fontSize: 60,
        textAlign: 'center',
    },
})