import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import {globalStyles} from '../styles/global';
import { LinearGradient } from 'expo-linear-gradient';


export default function Welcome(){
    const pressHandler = () => {
        navigation.push('Home')
    }
    return(
      //  <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
    <View  style={globalStyles.obalovac}>
    
    <View style={globalStyles.header}>
    
    <Animatable.Image
    animation="fadeIn" 
      source={require('../assets/wallet.png')} style={globalStyles.logo}
    />
    
    </View>
    <Animatable.View animation="bounceInUp"style={globalStyles.footer}>
       
      <View style={globalStyles.popis}>
          
        <Text style={globalStyles.nadpis}>Majte svoje financie pod kontrolou so Savi aplikáciou!</Text>
      </View>
      
        <TouchableOpacity
        style={globalStyles.tlacitko}
        onPress={pressHandler}>
        <Text style={{color : 'white', textAlign : 'center'}}>Vyskúšať</Text>
        </TouchableOpacity>       
        
    </Animatable.View>
  </View>
  //</LinearGradient>
    )
}
