import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../screens/HomeStackScreen.js';
import FavouritesScreen from '../screens/FavouritesScreen.js';
import SearchScreen from '../screens/SearchScreen.js';
import TimerScreen from '../screens/TimerScreen.js';
import TeaScreen from '../screens/TeaScreen.js';
import {Image, View, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles.js';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

const openTeaScreen = () => {
  console.warn('open')
  }
//tabBarStyle: { height:0.20 * Dimensions.get('window').height}
const Tabs = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator 
      screenOptions={{headerShown: false, tabBarShowLabel: false}}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStackScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            focused?
            <View style={styles.active} >
              <Image 
                source={require('../icons/tea.png')} 
                style={styles.image}
              />
            </View > : <View style={styles.disabled} >
              <Image 
                source={require('../icons/tea.png')} 
                style={styles.image}
              />
            </View >
        )
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarIcon: ({focused}) => (
            focused?
            <View style={styles.active} >
              <Image 
                source={require('../icons/search.png')} 
                style={styles.image}
              />
            </View > : <View style={styles.disabled} >
              <Image 
                source={require('../icons/search.png')} 
                style={styles.image}
              />
            </View >
        )
        }}/>
      <Tab.Screen name="Favourites" component={FavouritesScreen} options={{
          tabBarIcon: ({focused}) => (
            focused?
            <View style={styles.active} >
              <Image 
                source={require('../icons/favourite.png')} 
                style={styles.image}
              />
            </View > : <View style={styles.disabled} >
              <Image 
                source={require('../icons/favourite.png')} 
                style={styles.image}
              />
            </View >
        )
        }}/>
      <Tab.Screen name="Timer" component={TimerScreen} initialParams={{time: -1}} options={{
          tabBarIcon: ({focused}) => (
            focused?
            <View style={styles.active} >
              <Image 
                source={require('../icons/timer.png')} 
                style={styles.image}
              />
            </View > : <View style={styles.disabled} >
              <Image 
                source={require('../icons/timer.png')} 
                style={styles.image}
              />
            </View >
        )
        }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

//const Stack = createStackNavigator();

// function Tabs3() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false, tabBarShowLabel: false}}>
//         <Stack.Screen name="BottomMenu" component={BottomMenu}/>
//         <Stack.Screen name="TeaScreen" component={TeaScreen} options={{headerShown: true, tabBarShowLabel: true, headerTitle: 'Szczegóły'}} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default Tabs;

