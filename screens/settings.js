import React from 'react';
import { View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/global';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const TabIcon = (props) => (
    <AntDesign name="setting" size={24} color="black" />
  )
  
  
export default class Home extends React.Component{
    
    static navigationOptions = {
        tabBarIcon: TabIcon,
       
      };
      render(){

      
    return(
        <View style={globalStyles.gradient}>
           <LinearGradient style={globalStyles.gradient}
        // Button Linear Gradient
        colors={['#79FFFF', '#EEFF89', '#B6F566']}>
      
      
      </LinearGradient>
       
        </View>
    )
}
}
