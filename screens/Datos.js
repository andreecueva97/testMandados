import React from 'react';
import {
  SafeAreaView,
  StyleSheet,TextInput,
  Text,View,
  useColorScheme,TouchableOpacity
} from 'react-native';

class Datos extends React.Component{
    constructor(props){
        super(props);
    }
    state={nombre:'',apellido:'',edad:"",dni:''};
    handleNombre=(texto)=>{
      this.setState({nombre:texto})
    }
    handleNombre=(texto)=>{
      this.setState({apellido:texto})
    }
    handleNombre=(texto)=>{
      this.setState({edad:texto})
    }
    handleNombre=(texto)=>{
      this.setState({dni:texto})
    }
    render(){
      return(
        <View style={styles.inicio_View}>
        <Text style ={{textAlign:'center',backgroundColor:'white',alignContent:'center',justifyContent:'center'}}>ACA DATOS</Text>
        <View style={styles.inicio_Title}>
              <Text style={styles.inicio_Text}>Nombre</Text>
            </View>
        <TextInput style={styles.datos_textinput}
          underlineColorAndroid="transparent"
          placeholder="nombre"
          placeholderTextColor="white"
          autoCapitalize = "none"
          onChangeText={this.handleNombre}
        />
        <View style={styles.inicio_Title}>
              <Text style={styles.inicio_Text}>Apellido</Text>
            </View>
        <TextInput style={styles.datos_textinput}
          underlineColorAndroid="transparent"
          placeholder="apellido"
          placeholderTextColor="white"
          autoCapitalize = "none"
          onChangeText={this.handleApellido}
        />
        <View style={styles.inicio_Title}>
              <Text style={styles.inicio_Text}>Edad</Text>
            </View>
        <TextInput style={styles.datos_textinput}
          underlineColorAndroid="transparent"
          placeholder="edad"
          keyboardType="numeric"
          placeholderTextColor="white"
          autoCapitalize = "none"
          onChangeText={this.handleApellido}
          maxLength={3}
        />
        <View style={styles.inicio_Title}>
              <Text style={styles.inicio_Text}>DNI</Text>
            </View> 
        <TextInput style={styles.datos_textinput}
          underlineColorAndroid="transparent"
          placeholder="dni"
          keyboardType="numeric"
          placeholderTextColor="white"
          autoCapitalize = "none"
          onChangeText={this.handleApellido}
          maxLength={10}
        />
        <View style={{paddingTop:36,backgroundColor:'red',alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 10}}>
        <TouchableOpacity 
            style={styles.inicio_Button}
            onPress={() => { this.props.navigation.navigate('Juego_Mapa') }}
          >
              <Text style={styles.inicio_Text}>Iniciar Juego</Text>
          </TouchableOpacity>
        </View>
        
    </View> 
      )
  }
}

const styles = StyleSheet.create({
  datos_textinput:{
    margin:15,
    height:40,
    borderColor:'white',
    borderWidth:1,
  },
  inicio_View:{
    flexDirection:'column',backgroundColor:'green',
    flex:1,
    alignContent: 'center', justifyContent: 'center',
    paddingTop:23,
  },
  inicio_Text:{
    backgroundColor:'yellow', fontSize:30,
    alignContent: 'center', justifyContent: 'center',
    borderWidth: 2,alignItems: 'center',textAlign:'center',
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
  }
});

export default Datos;