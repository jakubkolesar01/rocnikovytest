import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './screens/home';
//import Navigator from './routes/HomeStack';
import AppNavigator from './routes/AppNavigator';
import Welcome from './screens/welcome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { createStackNavigator } from 'react-navigation-stack';

const Tab = createBottomTabNavigator();

const App =()=> { 
  return (
    
      <AppNavigator/>
    
  );
};

export default App;