//https://medium.com/geekculture/how-to-use-realm-local-db-in-react-native-4e9f9dfcbc53
import React, { useState } from 'react';
import {
  Dimensions, Modal,
  StyleSheet, FlatList,
  Text, TouchableOpacity, TouchableHighlight,
  View
} from 'react-native';
import Realm from 'realm';
const Puntuaciones = ({ navigation}) => {

  const [shouldShow, setShouldShow] = useState(false);
  const [filtrarPor, setFiltrarPor] = useState('filtrar por');
  const [modalVisible, setModalVisible] = useState(false);
  let realm;
  
  realm = new Realm({ path:'version6.realm' });
  console.log('Juegos en Puntuaciones----------------------------------');
  console.log(realm.objects('Juego'));
  console.log('Usuarios en Puntuaciones----------------------------------');
  console.log(realm.objects('User'));
  //console.log(route.params.juegoId);
  //const [juego, setJuego] = useState(realm.objects('Juego').filtered('id=' + route.params.juegoId.toString())[0].posiciones);
  //const [juegoTiempo, setJuegoTiempo] = useState(realm.objects('Juego').filtered('id=' + route.params.juegoId.toString())[0].posicionesTiempo);
  let juegoRealizadosData =  realm.objects('Juego') ;
  return (
    <View style={styles.inicio_View}>
      <View style={{ flexDirection: 'row', width: Dimensions.get('window').width, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textAlign: 'center', fontSize: 30 }}>PUNTUACIONES</Text>
      </View>
      <View style={{ flexDirection: 'row', width: Dimensions.get('window').width, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textAlign: 'center', fontSize: 3 }}></Text>
      </View>
      {/* <View style={styles.inicio_Logo} >
        <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
          <Text style={styles.inicio_Text}>{filtrarPor}</Text>
        </TouchableOpacity>
      </View> */}
      {shouldShow ? (
        <View>
          <FlatList
            data={['filtrar por', 'dni', 'edad', 'nombre', 'apellido']}
            style={{ fontSize: 24, zIndex: 1, height: 60, backgroundColor: '#EEECE7', width: Dimensions.get('window').width, flexGrow: 0, position: 'absolute', }}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {
                //setFiltrarPor({ filtrarPor: item });
                setShouldShow(!shouldShow )
              }}>
                <View>
                  <Text style={{}}>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.toString()}

          />
        </View>
      ) : null}
      <View style={{ flexDirection: 'row', width: Dimensions.get('window').width, justifyContent: "center", alignItems: "center" }}>
        
        <View style={{ fontSize: 30, backgroundColor: '#3671A3', justifyContent: 'space-between', alignItems: "center", flexDirection: 'row' }}>
              <View>
              <Text style={{ textAlign: 'center', width: Dimensions.get('window').width / 4, backgroundColor: 'white', fontSize: 25, justifyContent: "center", alignItems: "center" }}>Juego</Text>
              </View>
              <View>
              <Text style={{ textAlign: 'center', width: Dimensions.get('window').width / 2, backgroundColor: 'white', fontSize: 25, justifyContent: "center", alignItems: "center" }}>Usuario</Text>
              </View>
              <View>
              <Text style={{ textAlign: 'center', width: Dimensions.get('window').width / 4, backgroundColor: 'white', fontSize: 25, justifyContent: "center", alignItems: "center" }}>Tiempo</Text>
              </View>
        </View>
      </View>
      <View style={{ color: 'blue', height: 400, width: Dimensions.get('window').width, flexDirection: 'row' ,borderTop:3,borderBottom:3}}>
        <FlatList //lista de localidades en vista con sus nombres y ids y tiempo y posiciones de haber ido
          //data={realm.objects('Juego')}
          data={juegoRealizadosData}
          style={{ fontSize: 30, color: 'white' }}
          renderItem={({ item }) =>
            <View style={{ fontSize: 30, backgroundColor: '#3671A3', justifyContent: 'space-between', alignItems: "center", flexDirection: 'row', justifyContent: "center" }}>
          
              {console.log(item)}
              <View style={{backgroundColor: '#AABECF',height:70,top:4,textAlign: 'center',justifyContent: "center", alignItems: "center",}} >
                <Text style={{textAlign: 'center',justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width / 5, fontSize: 30, color: '#371B1F',  }}>
                  {/* {(juego.findIndex((element) => element === item))}
                 */}
                  {item.id.toString()}
                </Text>
              </View>
              <View style={{backgroundColor: '#AABECF',height:70,top:4,textAlign: 'center',justifyContent: "center", alignItems: "center",}} >
                <Text style={{ textAlign: 'center',justifyContent: "center", alignItems: "center",width: Dimensions.get('window').width *( 3/5), fontSize: 15, color: '#371B1F',  backgroundColor: '#AABECF' }}>
                {'dni  '}{item.user.dni}
                </Text>
                <Text style={{ textAlign: 'center',justifyContent: "center", alignItems: "center",width: Dimensions.get('window').width *( 3/5), fontSize: 15, color: '#371B1F', backgroundColor: '#AABECF' }}>
                  {item.user.apellido}{','}{item.user.name}
                </Text>
                <Text style={{ textAlign: 'center',justifyContent: "center", alignItems: "center",width: Dimensions.get('window').width *( 3/5), fontSize: 15, color: '#371B1F', backgroundColor: '#AABECF' }}>
                {'edad  '}{item.user.edad}
                </Text>
              </View>
              <View style={{backgroundColor: '#AABECF',height:70,top:4,textAlign: 'center',justifyContent: "center", alignItems: "center",}} >
                <Text style={{textAlign: 'center', justifyContent: "center", alignItems: "center",width: Dimensions.get('window').width *( 1/5), fontSize: 30, color: '#371B1F',  backgroundColor: '#AABECF' }}>
                  {item.posicionesTiempo[10]}
                </Text>
                <TouchableOpacity
          style={[styles.inicio_Button, { height: 10, width:10, backgroundColor:'white'}]}
          onPress={() => { navigation.navigate('Juego_Mapa_Recorrido',{juegoId:item.id}) }}
        >
          <Text style={{ fontSize: 25 }}>mapa</Text>
        </TouchableOpacity>
              </View>
          
                    
            </View>

          }
        //  keyExtractor={(item) => item.toString()}
         keyExtractor={(item) =>  item.id + "_" +item.tipo +"_"+item.user+"_"+item.posiciones+"_"+item.posicionesTiempo+"_"+item.posicionesNumericas}
        // id: 'int',
      // tipo:'int',     //posiciones de localidades en la partida
      // user:'User',
      // posiciones:'string[]',
      // posicionesTiempo:'string[]',
      // posicionesNumericas:'int[]'
        />
      </View>
      <View style={{ flexDirection: 'row', width: Dimensions.get('window').width, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textAlign: 'center', fontSize: 8 }}></Text>
      </View>
      
      <View style={{ flexDirection: 'row', width: Dimensions.get('window').width, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textAlign: 'center', fontSize: 8 }}></Text>
      </View>
      <View
        style={[styles.inicio_Logo, { width: Dimensions.get('window').width, }]}
      >
        <TouchableOpacity
          style={[styles.inicio_Button, { height: 60, }]}
          onPress={() => { navigation.navigate('Inicio') }}
        >
          <Text style={{ fontSize: 25 }}>Inicio</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{
        alignContent: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 3, top: '3%',
        marginBottom: 10, width: Dimensions.get('window').width, position: 'relative', height: 100, fontSize: 30
      }}>
        <TouchableOpacity
          style={[styles.inicio_Button, {
            height: 60, fontSize: 30,
          }]}
          onPress={() => { navigation.navigate('Datos') }}
        >
          <Text style={{ fontSize: 25 }}>Iniciar Juego</Text>
        </TouchableOpacity>
      </View> */}
      <View style={[styles.Puntuaciones_Button_info, { left: '2%' }]}>
        <TouchableOpacity
          style={{ justifyContent: 'center', borderRadius: 40 / 2, height: 40, width: 40, borderWidth: 3, borderColor: 'lightgrey' }}
          onPress={() => { setModalVisible(!modalVisible); }}
        >
          <Text style={{ fontSize: 14, textAlign: 'center' }}> i </Text>
        </TouchableOpacity>
      </View>
      <View styles={{}}>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => { Alert.alert("Modal fue cerrado."); }}
        >
          <View style={{ zIndex: 10, left: 1, top:'15%', backgroundColor: 'white' }}>
            <View style={{}}>
              <Text style={{fontSize:25}}>Esta tarea consiste en hacer varios mandados. Tenés que salir de tu hogar a las 9:15 hs., hacer varios mandados o diligencias y estar de regreso a las 13:00 hs. Para recorrer el camino de tu hogar a la estación, se tardan 30 minutos. La oficina donde se pagan los impuestos cierra a las 10 hs. Los negocios y el correo cierran a las 12:00 hs. y la panadería abre después de las 11:00 hs. Tenés que hacer las siguientes tareas</Text>
              <TouchableHighlight
                style={{ backgroundColor: "#34495E" }}
                onPress={() => { setModalVisible(!modalVisible); }}
              >
                <Text style={{fontSize:25}}>continuar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  Puntuaciones_Button_info: {
    backgroundColor: 'white', alignContent: 'center',
    flexDirection: 'row',
    borderRadius: 40 / 2,
    height: 40, width: 40,

  },
  inicio_View: {
    backgroundColor: '#3671A3',
    flex: 1,
    alignContent: 'center',
    flexDirection: 'column', justifyContent: 'center'
  },
  inicio_Text: {
    backgroundColor: '#B5B5BA', fontSize: 25,
    alignContent: 'center', justifyContent: 'center',
    borderWidth: 1, alignItems: 'center', textAlign: 'center',
  },
  inicio_Title: {
    fontSize: 30,
    color: 'yellow',
    alignContent: 'center', justifyContent: 'center',
    backgroundColor: 'blue', textAlign: 'center',
    flexDirection: 'row'
  },
  inicio_Logo: {
    fontSize: 25,
    //position:'relative',
    flexDirection: 'row',
    alignContent: 'center', justifyContent: 'center',
    textAlign: 'center',
  },
  inicio_Button: {

    width: Dimensions.get('window').width / 2,

    //////////
    fontSize: 30,
    borderRadius: 10,

    width: 300,
    backgroundColor: '#AABECF',
    padding: 10,
    elevation: 2,
    justifyContent: "center", alignItems: "center",
    textAlign: 'center',
  },
});

export default Puntuaciones;