import React, { useState,useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet, TextInput,
  Text, View,
  useColorScheme, TouchableOpacity
} from 'react-native';
import realm from '../REALMDB.js';
// import { UserState } from 'realm';

const Datos = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [dni, setDni] = useState('');
  const [userId,setUserId] = useState(0);
  useEffect(() => {
    // action on update of userId
    setUserId(realm.objects('User').length +1);
    
    setNombre('nombre');setApellido('apellido');setEdad('edad');setDni('dni');
}, [userId]);
  agregarUser =()=>{
    let last = realm.objects('User').length +1;
   
    realm.write(()=>{
      realm.create('User',{
        id:last,
        name: nombre,
        apellido:apellido,
        edad:edad,
        dni:dni,
      });
    });
    console.log(realm.objects('User'));
    setUserId(realm.objects('User').length +1);
    // ref['name'].setNativeProps({ text: 'name' });
    // ref['apellido'].setNativeProps({ text: 'apellido' });
    // ref['edad'].setNativeProps({ text: 'edad' });
    // ref['dni'].setNativeProps({ text: 'dni' });
    console.log(userId);

  }

  handleVerificateOfData = () => {
    // if(this.state.check>4){
    //         this.props.navigation.navigate('Juego_Mapa') ;
    // }
    // else{
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(dni);

    // }
    // this.props.navigation.navigate('Juego_Mapa') ;
  }
  return (
    <View style={styles.inicio_View}>
      {/* <Text style ={{textAlign:'center',backgroundColor:'white',alignContent:'center',justifyContent:'center'}}>ACA DATOS</Text> */}
      <View style={styles.inicio_Title}>
        <Text style={styles.inicio_Text}>Nombre</Text>
      </View>
      <TextInput style={styles.datos_textinput}
        //ref={"nombre"}
        underlineColorAndroid="transparent"
        placeholder="nombre"
        placeholderTextColor="white"
        autoCapitalize="none"
        // defaultValue={apellido}
        onChangeText={nombre => setNombre(nombre)}
      
    />
      <View style={styles.inicio_Title}>
        <Text style={styles.inicio_Text}>Apellido</Text>
      </View>
      <TextInput style={styles.datos_textinput}
       // ref={"apellido"}
        underlineColorAndroid="transparent"
        placeholder="apellido"
        placeholderTextColor="white"
        autoCapitalize="none"
        // defaultValue={apellido}
        onChangeText={apellido => setApellido(apellido)}
      />
      <View style={styles.inicio_Title}>
        <Text style={styles.inicio_Text}>Edad</Text>
      </View>
      <TextInput style={styles.datos_textinput}
      //  ref={"edad"}
        underlineColorAndroid="transparent"
        placeholder="edad"
        keyboardType="numeric"
        placeholderTextColor="white"
        autoCapitalize="none"
        // defaultValue={edad}
        onChangeText={edad => setEdad(edad)}
        maxLength={3}
      />
      <View style={styles.inicio_Title}>
        <Text style={styles.inicio_Text}>DNI</Text>
      </View>
      <TextInput style={styles.datos_textinput}
       // ref={"dni"}
        underlineColorAndroid="transparent"
        placeholder="dni"
        keyboardType="numeric"
        placeholderTextColor="white"
        autoCapitalize="none"
        // defaultValue={dni}
        onChangeText={dni => setDni(dni)}
        maxLength={10}
      />
      <View style={{
        alignContent: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 3,
        marginBottom: 10, paddingTop: 20
      }}>
        <TouchableOpacity
          style={styles.inicio_Button}
          onPress={() => {
            navigation.navigate('Juego_Mapa',{ user:realm.objects('User')[realm.objects('User').length-1]});
            //{ names: ['Brent', 'Satya', 'Michaś'] }
            handleVerificateOfData();
            agregarUser();
          }}
        >
          <Text style={styles.inicio_TextButton}>Iniciar Juego</Text>
        </TouchableOpacity>
      </View>

    </View>)


}
const styles = StyleSheet.create({
  datos_textinput: {
    margin: 15,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
  },
  inicio_View: {
    flexDirection: 'column', backgroundColor: '#3671A3',
    flex: 1,
    alignContent: 'center', justifyContent: 'center',
    paddingTop: 0,
  },
  inicio_TextButton: {
    fontSize: 30,
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center', textAlign: 'center',
  },
  inicio_Text: {
    backgroundColor: '#3671A3', fontSize: 30,
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center', textAlign: 'center'
  },
  inicio_Button: {
    fontSize: 30,
    borderRadius: 10,
    width: 300,
    backgroundColor: '#AABECF',
    padding: 10,
    elevation: 2,
    justifyContent: "center", alignItems: "center",
    textAlign: 'center',
  }
});

export default Datos;