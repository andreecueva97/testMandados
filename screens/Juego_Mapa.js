import React from 'react';
import {
  SafeAreaView,Image,
  StyleSheet,Dimensions,
  Text,View,TouchableOpacity,
  useColorScheme,
} from 'react-native';

class Juego_Mapa extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
      return(
        <View style={styles.inicio_View}>
        <Text style ={{top:324,textAlign:'center',backgroundColor:'white',alignContent:'center',justifyContent:'center'}}>ACA JUEGO MAPA</Text>
        <View style={[styles.inicio_Title,{top:320,zIndex:10}]}>
          <Text style={styles.inicio_Text}>Test de los Mandados</Text>
        </View>
        <View>
          <Image 
              style={{top:300,left:100}}
              source={require('@img/testmandados_LaCasaModificado.jpg')}
          />  
        </View>          
        <View style={{zIndex:-1,top:120,backgroundColor:'red',alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 10}}>
        <TouchableOpacity 
            style={[styles.inicio_Button,{left:210}]}
            onPress={()=>{}}
          >
              <Text style={styles.inicio_Text}>Terminar</Text>
          </TouchableOpacity>
        </View>
        <View style={{zIndex:-1,top:100,backgroundColor:'red',alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 10}}>
        <TouchableOpacity 
            style={[styles.inicio_Button,{left:210}]}
            onPress={()=>{}}
          >
              <Text style={styles.inicio_Text}>00:00:00</Text>
          </TouchableOpacity>
          
        </View>
        <View style={[styles.RevisionGeneral_Button_info,{top:10}]}>
            <TouchableOpacity 
                style={{justifyContent:'center',borderRadius: 40/2, height:40,width:40,borderWidth: 3,borderColor:'lightgrey'}}
                onPress={()=>{}}
              >
                  <Text style={{fontSize:14,textAlign:'center'}}>info</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.RevisionGeneral_Button_info,{top:-300}]}>
            <TouchableOpacity 
                style={{justifyContent:'center',borderRadius: 40/2, height:40,width:40,borderWidth: 3,borderColor:'lightgrey'}}
                onPress={()=>{}}
              >
                  <Text style={{fontSize:25,textAlign:'center'}}>≡</Text>
              </TouchableOpacity>
            </View>
    </View>  
      )
  }
}


const styles = StyleSheet.create({
  RevisionGeneral_Button_info:{
        backgroundColor:'white',alignContent: 'center',
        flexDirection: 'row', 
        borderRadius: 40/2, 
        height:40,width:40,
        top:-1, left:26,
      },
  inicio_View:{
    //flexDirection:'column',
    backgroundColor:'blue',
    flex:1,
    alignContent: 'center', justifyContent: 'center',
    transform:[{rotate: '90 deg'}],
    //width:Dimensions.get('window').height,
    height:Dimensions.get('window').width,
    width:Dimensions.get('window').height,
    // height:Dimensions.get('window').width,
  },
  inicio_Text:{
    backgroundColor:'yellow', fontSize:30,
    alignContent: 'center', justifyContent: 'center',
    borderWidth: 2,alignItems: 'center',textAlign:'center',
  },
  inicio_Title:{
    fontSize:30,
    color:'yellow',
    alignContent: 'center', justifyContent: 'center',
    backgroundColor:'blue',textAlign:'center',
  },
  inicio_Logo:{
    fontSize:30,
    position:'relative',
    alignContent: 'center', justifyContent: 'center',
    textAlign:'center',
  },
  inicio_Button:{
    fontSize:30,
    borderRadius:10,
    
    width:300,
    backgroundColor:'grey',
    padding: 10,
    elevation: 2,
    justifyContent: "center",alignItems: "center",
    textAlign:'center',
  },
});

export default Juego_Mapa;