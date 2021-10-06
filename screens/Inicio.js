import React from 'react';
import {
  StyleSheet,View,Image,
  Text,
  TouchableOpacity,Dimensions
} from 'react-native';
import realm from '../REALMDB.js';

const Inicio = ({navigation})=>{
  return(
    <View style={styles.inicio_View}>
<View style={styles.inicio_Title}>
<Text style={styles.inicio_Text}>Test de los Mandados</Text>
</View>          
<View style={{alignItems:'center',justifyContent:'center'}}>

<Image 
style={{width:300,height:300}}
source={require('@img/logo.png')}
/>  

</View>
<View style={{alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 10}}>
<TouchableOpacity 
style={styles.inicio_Button}
onPress={() => {  navigation.navigate('Datos')}}
>
<Text style={styles.inicio_TextButton}>INICIAR</Text>
</TouchableOpacity>
</View>
<View style={{alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 10}}>
<TouchableOpacity 
style={styles.inicio_Button}
onPress={() => {  navigation.navigate('Revision_General',{juego:realm.objects('Juego')[realm.objects('Juego').length-1]})}}
>
<Text style={styles.inicio_TextButton}>Puntuaciones</Text>
</TouchableOpacity>
</View>
        </View>  
  )
}


const styles = StyleSheet.create({
  inicio_View:{
    flexDirection:'column',backgroundColor:'#3671A3',
    flex:1,
    alignContent: 'center', justifyContent: 'center'
  },
  inicio_Text:{
    fontSize:35,
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center',textAlign:'center',
  },
  inicio_TextButton:{
     fontSize:30,
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center',textAlign:'center',
  },
  inicio_Title:{
    fontSize:30,
    color:'yellow',
    alignContent: 'center', justifyContent: 'center',
    backgroundColor:'#3671A3',textAlign:'center',
  },
  inicio_Logo:{
    fontSize:30,
    position:'relative',
    alignContent: 'center', justifyContent: 'center',
    textAlign:'center',width:300,
  },
  inicio_Button:{
    fontSize:30,
    borderRadius:10,
    
    width:300,
    backgroundColor:'#AABECF',
    padding: 10,
    elevation: 2,
    justifyContent: "center",alignItems: "center",
    textAlign:'center',
  },
});

export default Inicio;



