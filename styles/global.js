import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 24,
    },
    nadpis : {
        fontSize : 22,
        textAlign :"center",
      },
      obalovac : {
        flex : 1,
        flexDirection : 'column',
        overflow: 'hidden',
        
      },
      header : {
        flex :3,
        justifyContent : 'center',
        alignItems : 'center',
      },
      footer : {
        flex : 1.3,
        backgroundColor : '#fff', 
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        textAlign : 'center',
        alignItems : "center",
        justifyContent : "center",
      },
      popis : {
          width : 400,
        padding : 25,
      },
      tlacitko : {
        padding  :15,
        width : 150,
        backgroundColor:'#009387',
        borderRadius:30,
      },
      logo : {
        width : 150,
        height : 150,
      },
      gradient : {
          flex :1
      },
      zostatok : {
        flex : 0.7,
        justifyContent : "center",
        alignItems : "center"
      },
      veta:{
        color: 'white', 
        fontSize: 24 , 
        textShadowColor:'#585858',
        textShadowRadius:4
      },
      zostatokeur : {
        color: 'white', 
        fontSize: 64 , 
        textShadowColor:'#585858',
        textShadowRadius:4
      },
      footerhome : {
        flex : 1.3,
        backgroundColor : '#fff', 
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        textAlign : 'center',
      },  
      buttons : {
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "row",
        padding : 25,
        
      },
     
      tlacitkohome : {
        marginRight : 15,
        marginLeft : 15,
        justifyContent : "center",
        width : 130,
        height : 50,
        backgroundColor:'#009387',
        borderRadius:30,
      },
      transactions: {
        padding : 20,
      }
     
})