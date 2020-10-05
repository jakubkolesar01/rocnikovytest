import React , { useState } from 'react';
import { View, Text, ScrollView  } from 'react-native';
import {globalStyles} from '../styles/global';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddItem from './AddItem';


    
        const Home = () => {

            const [money, setMoney] = useState(0);
            
            const TabIcon = (props) => (
                <AntDesign name="home" size={24} color="black" />
                )

            const AddMoney =() =>{
               setMoney(money + 1)
                };

    
            return(
                <View style={globalStyles.gradient}>
                <LinearGradient style={globalStyles.gradient} colors={['#EEFF89', '#79FFFF', '#B6F566']}>
                <View  style={globalStyles.obalovac}>
                
                <Animatable.View animation="fadeIn" style={globalStyles.zostatok}>
                
                    <Text style={globalStyles.veta}>Na konte máš</Text>
            <Text style={globalStyles.zostatokeur}>{money} eur</Text>
                </Animatable.View>
                <Animatable.View animation="bounceInUp"style={globalStyles.footerhome}>
                    <View style={globalStyles.buttons}>
                        <TouchableOpacity style={globalStyles.tlacitkohome}> 
                            <Text style={{color:"white", fontSize: 20, textAlign:"center"}}>Minul som</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyles.tlacitkohome}> 
                            <Text style={{color:"white", fontSize: 20, textAlign:"center"}} onPress={AddMoney}>Zarobil som</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize :28, textAlign: "left" , padding : 15, marginLeft : 15 }}>História transakcií :</Text>
                    <Text numberOfLines={1} style={{textAlign:'center'}}>______________________________________________________ </Text>
                <ScrollView style={globalStyles.transactions}>
                        
                </ScrollView>
                
                
                </Animatable.View>
                </View>
                
                </LinearGradient>
                </View>
                )
        }

        export default Home;

        