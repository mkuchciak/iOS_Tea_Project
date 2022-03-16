import React, { useState, useEffect } from 'react';
import {View, Text, Button, StyleSheet, FlatList, StatusBar, ScrollView, Dimensions } from 'react-native';
import ListTeaItem from '../components/ListTeaItem/index.js'
import { SearchBar } from 'react-native-elements';
import teaList from '../components/ListTea/teaList.js'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';


const SearchScreen = ({navigation}) => {
    
    const [search, setSearch] = useState('');
    var [filteredDataSource, setFilteredDataSource] = useState(teaList);
    const [masterDataSource, setMasterDataSource] = useState(teaList);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = masterDataSource.filter(function (item) {
            const itemData = item.teaName
              ? item.teaName.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
        } else {
          
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
      };
    const ItemView = ({ item }) => {
        return (
          <ListTeaItem tea={item} nav={navigation}></ListTeaItem>
        );
      };
    
    const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
    };
    

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
            <SearchBar
                round
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.inputContainerStyle}
                
                searchIcon={{ size: 24 }}
                onChangeText={(text) => searchFilterFunction(text)}
                onClear={(text) => searchFilterFunction('')}
                placeholder="Wpisz wyszukiwaną frazę..."
                value={search}
            />
            </View>
            
            <FlatList
                style={styles.flatList}
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
            />
            
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        //top: StatusBar.currentHeight,
        top: '4%',
        flex:1
    },
    
    searchContainer: {
      //ramka dookoła searchbar
      backgroundColor: '#babec2',
      padding: 4,
      
    },
    inputContainerStyle: {
      //srodek searchbara
      backgroundColor: '#dce0e3',
    },
    flatList: {
      //flex:2
    },
    searchBar: {
      //flex:1
    }
})