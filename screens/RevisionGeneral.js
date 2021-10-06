import React, { useState } from 'react';
import {
    Dimensions,Modal,
  StyleSheet,FlatList,
  Text,TouchableOpacity,TouchableHighlight,
  View
} from 'react-native';
import realm from '../REALMDB.js';

const RevisionGeneral = ({navigation,route})=>{

  const [shouldShow, setShouldShow] = useState(false);
  const [filtrarPor,setFiltrarPor] = useState('filtrar por');
  const [modalVisible, setModalVisible] = useState(false);
  const [juego, setJuego]=useState(route.params.juego);
  return(
    <View style={styles.inicio_View}>
    <Text style ={{textAlign:'center',backgroundColor:'white',alignContent:'center',justifyContent:'center'}}>ACA REVISION GENERAL</Text>
    <View style={styles.inicio_Title}>
      <Text style={styles.inicio_Text}>Test de los Mandados</Text>
    </View>          
    <View style={styles.inicio_Logo} >
        <TouchableOpacity    onPress={() => setShouldShow({ shouldShow: !shouldShow })}>
            <Text style={styles.inicio_Text}>{filtrarPor}</Text>
        </TouchableOpacity>
    </View>
    {shouldShow?(
        <View>
        <FlatList
            data={['filtrar por','dni','edad','nombre','apellido']}
            style={{ fontSize:24,zIndex: 1, height: 60, backgroundColor: 'white', width:Dimensions.get('window').width, flexGrow: 0, position: 'absolute',  }}
            renderItem={({item})=>(
                <TouchableOpacity onPress={() => { setFiltrarPor({ filtrarPor: item }); setShouldShow({ shouldShow: !shouldShow }) }}>
                    <View>
                        <Text>{item}</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.toString()}
        
        />
    </View>
    ) : null}
    <View style={{color:'red',height:400,width:500,top:4}}>
  <FlatList //lista de perrros en vista con sus nombres y ids
    data={realm.objects('Juego')}
    
    style={{fontSize:40,color:'white'}}
    renderItem={({ item }) =>
      <View style={{fontSize:40,color:'white',backgroundColor:'green',}}>
          <Text style={{fontSize:40,color:'white'}}>{item}</Text>
      </View>
    }
    keyExtractor={(item) => item.toString()}
  />
  </View>
    <View style={[styles.inicio_Logo,{width:Dimensions.get('window').width/2,top:-20}]}>
      <Text style={styles.inicio_Text}>Tu puntuacion: 10.Gracias por participar</Text>
    </View>
    <View style={{alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 10,top:-180,width:Dimensions.get('window').width/2,left:200,height:100}}>
    <TouchableOpacity 
        style={[styles.inicio_Button,{height:60,zIndex:10,backgroundColor:'grey'}]}
        onPress={() => { navigation.navigate('Inicio') }}
      >
          <Text style={{}}>Terminar</Text>
      </TouchableOpacity>
    </View>
    <View style={{zIndex:10,alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 10,top:-180,width:Dimensions.get('window').width/2,left:200,height:100}}>
    <TouchableOpacity 
        style={[styles.inicio_Button,{height:60}]}
        onPress={() => { navigation.navigate('Datos') }}
      >
          <Text style={{}}>Repetir Juego</Text>
      </TouchableOpacity>
    </View>
    <View style={[styles.RevisionGeneral_Button_info,{top:-140,zIndex:10,left:20}]}>

    <TouchableOpacity 
        style={{justifyContent:'center',borderRadius: 40/2, height:40,width:40,borderWidth: 3,borderColor:'lightgrey'}}
        onPress={() => { setModalVisible(!modalVisible); }}
      >
          <Text style={{fontSize:14,textAlign:'center'}}>info</Text>
      </TouchableOpacity>
    </View>
    <View styles={{}}>
    <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { Alert.alert("Modal fue cerrado."); }}
        >
            <View style={{zIndex:10,left:1,top:300,backgroundColor:'white'}}>
                <View style={{}}>
                    <Text style={{}}>Esta tarea consiste en hacer varios mandados. Tenés que salir de tu hogar a las 9:15 hs., hacer varios mandados o diligencias y estar de regreso a las 13:00 hs. Para recorrer el camino de tu hogar a la estación, se tardan 30 minutos. La oficina donde se pagan los impuestos cierra a las 10 hs. Los negocios y el correo cierran a las 12:00 hs. y la panadería abre después de las 11:00 hs. Tenés que hacer las siguientes tareas</Text>
                    <TouchableHighlight
                        style={{ backgroundColor: "#34495E" }}
                        onPress={() => { setModalVisible(!modalVisible); }}
                    >
                        <Text style={{}}>continuar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    </View>
</View>  
)
  }


const styles = StyleSheet.create({
    RevisionGeneral_Button_info:{
        backgroundColor:'white',alignContent: 'center',
      
        borderRadius: 40/2, 
        height:40,width:40,
        left:100
      },
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
      textAlign:'center',
    },
    inicio_Button:{
      fontSize:30,
      borderRadius:10,
      width:Dimensions.get('window').width/2,
      backgroundColor:'grey',
      padding: 10,
      elevation: 2,
      justifyContent: "center",alignItems: "center",
      textAlign:'center',
    },
  });

export default RevisionGeneral;