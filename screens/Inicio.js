import React from 'react';
import {
  SafeAreaView,
  StyleSheet,View,
  Text,
  useColorScheme,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

class Inicio extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
      return(
          <View styles={styles.inicio_View}>
           
            <Text style={styles.inicio_Title}>Test de los Mandados</Text>
              <Text style={styles.inicio_Logo}>Logooooo</Text>
              <TouchableOpacity 
                style={styles.inicio_Button}
                onPress={()=>{}}
              >
                  <Text>INICIAR</Text>
              </TouchableOpacity>
          
              
          </View>
      )
  }
}




const styles = StyleSheet.create({
  inicio_View:{
    backgroundColor:'blue',
    
  },
  inicio_Title:{
    fontSize:30,
    color:'yellow',
  },
  inicio_Logo:{
    fontSize:30,
    position:'relative'

  },
  inicio_Button:{
    fontSize:30,
    paddingLeft:130,
  },
});

export default Inicio;