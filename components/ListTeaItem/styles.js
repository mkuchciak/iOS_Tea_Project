import {StyleSheet} from 'react-native';

const PICTURE_SIZE = 100;
const HEART_SIZE = 25;
const ICON_SIZE = 20;
const PADDING = 5;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: PICTURE_SIZE + 2*PADDING,
        padding: PADDING,
        backgroundColor: '#EFF3F1',
        flexDirection: 'row'   
    },
    info:{
        width: '70%',
    },
    title: {
        left: 10,
        fontSize: 20
        
    },
    description: {
        left: 10,
        width: '100%'
    },
    heart: {
        right: 10,
        top: 0,
        width: HEART_SIZE,
        height: HEART_SIZE,
        padding: 0
        
    },
    picture: {
        width: PICTURE_SIZE,
        height: PICTURE_SIZE
    },
    bottomRow: {
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        bottom: 5
    },
    row: {
        //position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        padding:5
    },
    rowElement: {
        flexDirection: 'row',
        paddingRight: 50
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        
    }, 
    iconHeart: {
        width: HEART_SIZE,
        height: HEART_SIZE,
        
    },
    titleWithIcons: {
        width: '95%',
    }
});

export default styles;