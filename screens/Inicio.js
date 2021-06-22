import React from 'react';
import {
  StyleSheet,View,
  Text,
  TouchableOpacity,Dimensions
} from 'react-native';

class Inicio extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
      return(
        <View style={styles.inicio_View}>
            <Text style ={{textAlign:'center',backgroundColor:'white',alignContent:'center',justifyContent:'center'}}>ACA INICIO</Text>
            <View style={styles.inicio_Title}>
              <Text style={styles.inicio_Text}>Test de los Mandados</Text>
            </View>          
            <View style={styles.inicio_Logo}>
              <Text style={styles.inicio_Text}>Logo</Text>
            </View>
            <View style={{backgroundColor:'red',alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
    marginBottom: 10}}>
            <TouchableOpacity 
                style={styles.inicio_Button}
                onPress={() => { this.props.navigation.navigate('Datos') }}
              >
                  <Text style={styles.inicio_Text}>INICIAR</Text>
              </TouchableOpacity>
            </View>
            
        </View>  
      )
  }
}




const styles = StyleSheet.create({
  inicio_View:{
    flexDirection:'column',backgroundColor:'blue',
    flex:1,
    alignContent: 'center', justifyContent: 'center'
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
    textAlign:'center',width:300,
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

export default Inicio;