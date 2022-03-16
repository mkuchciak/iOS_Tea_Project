import React, { useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';


const ListTeaItem = (props) => {

    const {teaName, description, temp, minTime, maxTime, onPress, id, scr} = props.tea;
    var [favorites, setFavorites] = useState([]);
    const addFavourite = (tea) => {
        if(favorites.includes(id))
        {
            var index = favorites.indexOf(tea.id);
            setFavorites(arr => [delete arr[index]]);
        } else {
            setFavorites( favorites => [favorites, tea.id]);
        }
    };

    return (
        <View>
            <Pressable
                style={styles.container}
                onPress={() => props.nav.navigate('HomeStack', {screen: 'Tea', params: {tea: props.tea}})} 
                >
            <View>
                <Image 
                    style={styles.picture}
                    source={scr}
                />
            </View>
            <View style ={styles.info}>

                <View style={styles.row}>

                    <View style={styles.titleWithIcons}>
                        <Text style={styles.title}>{teaName}</Text>
                        <View style={styles.row}>
                            <View style={styles.rowElement}>
                                <Image 
                                    style={styles.icon}
                                    source={require('../../icons/temperature.png')}
                                />
                                <Text>{temp}°C</Text>
                            </View>

                            <View style={styles.rowElement}>
                                <Image 
                                    style={styles.icon}
                                    source={require('../../icons/hourglass.png')}
                                />
                                <Text>{minTime}-{maxTime} min</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.heart}>
                        {favorites.includes(id) ? (
                            <Pressable 
                            onPress={() => addFavourite({id})}>   
                                <Image 
                                    style={styles.iconHeart}
                                    source={require('../../icons/favourite.png')}
                                />
                            </Pressable>
                        ) : (
                            <Pressable 
                            onPress={() => addFavourite({id})}>   
                                <Image 
                                    style={styles.iconHeart}
                                    source={require('../../icons/heart.png')}
                                />
                            </Pressable>
                        )}
                    </View>
                </View>

                <View style={styles.bottomRow}>
                    <Text numberOfLines={2} style={styles.description}>{description}</Text>
                </View>
                
            </View>
            </Pressable>
        </View>
    )
};

export default ListTeaItem;