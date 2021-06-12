import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

class Juego_Recorrido extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
      return(
        <View style={styles.inicio_View}>
        <Text style ={{top:130,textAlign:'center',backgroundColor:'white',alignContent:'center',justifyContent:'center'}}>ACA JUEGO RECORRIDO</Text>
        <View style={[styles.inicio_Title,{top:130}]}>
          <Text style={styles.inicio_Text}>Test de los Mandados</Text>
        </View>          
        <View style={[styles.inicio_Logo,{top:130}]}>
          <Text style={styles.inicio_Text}>Imagen</Text>
        </View>
        <View style={{top:220,backgroundColor:'red',alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 10}}>
        <TouchableOpacity 
            style={[styles.inicio_Button,{left:210}]}
            onPress={()=>{}}
          >
              <Text style={styles.inicio_Text}>Terminar</Text>
          </TouchableOpacity>
        </View>
        <View style={{top:230,backgroundColor:'red',alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 10}}>
        <TouchableOpacity 
            style={[styles.inicio_Button,{left:210}]}
            onPress={()=>{}}
          >
              <Text style={styles.inicio_Text}>00:00:00</Text>
          </TouchableOpacity>
          
        </View>
        <View style={[styles.RevisionGeneral_Button_info,{top:210}]}>
            <TouchableOpacity 
                style={{justifyContent:'center',borderRadius: 40/2, height:40,width:40,borderWidth: 3,borderColor:'lightgrey'}}
                onPress={()=>{}}
              >
                  <Text style={{fontSize:14,textAlign:'center'}}>info</Text>
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

export default Juego_Recorrido;