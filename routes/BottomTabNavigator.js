import React from 'react';
import {View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from '../screens/home';
import Settings from '../screens/settings';
import Statistics from '../screens/statistics';
import { AntDesign } from '@expo/vector-icons';

const BottomTabNavigator = createBottomTabNavigator(
    {
    Home : {
      screen: Home,
      navigationOptions: {
        tabBarIcon: () => (
          <AntDesign name="home" size={24} color="black" />
        ) 
       }
    },
    Statistics : Statistics,
    Settings : Settings,

    
},{
    tabBarOptions: {
        showLabel: false,
        activeBackgroundColor:  "white",
        inactiveBackgroundColor : "#B6F566",
      }
}

);


export default BottomTabNavigator;