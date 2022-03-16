import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    active: {
        backgroundColor: '#E8E8E8',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover'
    },
    disabled: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover'       
    },
    image: {
        height: '70%',
        width: '30%',
        resizeMode: 'contain'
    }
});

export default styles;