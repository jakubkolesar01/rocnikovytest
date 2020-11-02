import React , { useState } from 'react';
import { View, Text, ScrollView, Alert, Modal  } from 'react-native';
import {globalStyles} from '../styles/global';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


import flatlistData from '../data/flatlistData';
import { MaterialIcons } from '@expo/vector-icons';




        const Home = () => {
            const [money, setMoney] = useState(20);
            const [modalOpen, setmodalOpen] = useState(false);
            const TabIcon = (props) => (
                <AntDesign name="home" size={24} color="black" />
                )

            const AddMoney =() =>{
                setMoney(money + 1);
            };
            

            return(
                <View style={globalStyles.gradient}>
                    <Modal visible={modalOpen} style={globalStyles.wastemodal}>
                            <Text>KOLKO</Text>
                            <MaterialIcons
                                name='close'
                                size={24}
                                onPress={()=>setmodalOpen(false)}
                            />
                    </Modal>
                    <LinearGradient style={globalStyles.gradient} colors={['#EEFF89', '#79FFFF', '#B6F566']}>
                       
                        <View  style={globalStyles.obalovac}>
                            <Animatable.View animation="fadeIn" style={globalStyles.zostatok}>
                
                            <Text style={globalStyles.veta}>Na konte máš</Text>
                            <Text style={globalStyles.zostatokeur}>{money} eur</Text>
                            </Animatable.View>
                            <Animatable.View animation="bounceInUp"style={globalStyles.footerhome}>
                            
                                <View style={globalStyles.buttons}>
                                    <TouchableOpacity style={globalStyles.tlacitkohome}> 
                                        <Text style={{color:"white", fontSize: 20, textAlign:"center"}} onPress={()=>setmodalOpen(true)}>Minul som</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={globalStyles.tlacitkohome}> 
                                        <Text style={{color:"white", fontSize: 20, textAlign:"center"}} onPress={AddMoney}>Zarobil som</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{fontSize :28, textAlign: "left" , padding : 20, marginLeft : 15 }}>História transakcií :</Text>
                                
                                <View style={globalStyles.transactions}>
                                    <FlatList
                                    data={flatlistData}
                                    renderItem={({item}) => 
                                    <View style={globalStyles.transactionsitems}>
                                        <TouchableOpacity style={globalStyles.transwrap}>
                                            <View style={globalStyles.category}>
                                                <Text style={{fontSize : 18}}>{item.kategoria}</Text>
                                            </View>
                                            <View style={globalStyles.price}>
                                                <Text>{item.cena}€</Text>
                                                <Text>{item.datum}</Text>
                                            </View>
                                        </TouchableOpacity>
                                                                                                                 
                                    </View>

                                    }
                                    />
                                </View>
                            </Animatable.View>
                        </View>
                
                    </LinearGradient>
                </View>
                )
        }


        export default Home;

        