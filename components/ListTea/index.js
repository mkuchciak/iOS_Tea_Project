import React from 'react'
import { View, FlatList} from 'react-native'
import ListTeaItem from '../ListTeaItem/index.js'
import styles from './styles.js'
import teaList from './teaList'

const ListTea = (props) => {

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
            <FlatList
                data = {teaList}
                renderItem = {({item}) => (<ListTeaItem tea={item} nav={props.nav}/>)} 
                ItemSeparatorComponent={ItemSeparatorView}        
            />
        </View>
    )
};

export default ListTea;
