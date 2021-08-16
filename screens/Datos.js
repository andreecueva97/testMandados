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
        this.state={
          nombre:'',
          apellido:'',
          edad:"",
          dni:'',
          check:0,
        };
    }
    
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
    handleVerificateOfData(){
      // if(this.state.check>4){
      //         this.props.navigation.navigate('Juego_Mapa') ;
      // }
      // else{
      //   console.log('dfsadfafd');
      // }
      this.props.navigation.navigate('Juego_Mapa') ;
    }
    render(){
      return(
        <View style={styles.inicio_View}>
        {/* <Text style ={{textAlign:'center',backgroundColor:'white',alignContent:'center',justifyContent:'center'}}>ACA DATOS</Text> */}
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
        <View style={{alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 10,paddingTop:20}}>
        <TouchableOpacity 
            style={styles.inicio_Button}
            onPress={() => {  this.props.navigation.navigate('Juego_Mapa')}}
          >
              <Text style={styles.inicio_TextButton}>Iniciar Juego</Text>
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
    flexDirection:'column',backgroundColor:'#3671A3',
    flex:1,
    alignContent: 'center', justifyContent: 'center',
    paddingTop:0,
  },
  inicio_TextButton:{
    fontSize:30,
   alignContent: 'center', justifyContent: 'center',
   alignItems: 'center',textAlign:'center',
 },
  inicio_Text:{
    backgroundColor:'#3671A3', fontSize:30,
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center',textAlign:'center'
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
  }
});

export default Datos;