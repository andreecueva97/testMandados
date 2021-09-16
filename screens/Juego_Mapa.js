import React, { useState, useEffect } from 'react';
import {
  Image, StyleSheet, Dimensions, Text, View, TouchableHighlight, Modal,
} from 'react-native';
import Clock from '../components/Clock';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Juego_Mapa = ({ navigation }) => {
  //const {navigation} = this.props;
  const [modalVisible, setModalVisible] = useState(false);
  const [posiciones, setPosiciones] = useState(['la casa',]);
  const [almacen, setAlmacen] = useState(['a', 'b', 'c']);
  const [matriz, setMatriz] = useState([
    [{ posicion: ['0'] }, { posicion: ['c', 'b', 'a'] }, { posicion: ['e', 'd', 'c', 'b', 'a'] }, { posicion: ['ae', 'a'] }, { posicion: ['aa', 'ac', 'ad', 'ae', 'a'] }, { posicion: ['s', 'r', 'b', 'a'] }, { posicion: ['z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['y', 'z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['x', 'y', 'z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['j', 'k', 'v', 'x', 'y', 'z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['g', 'f', 'e', 'd', 'c', 'b', 'a'] }],
    [{ posicion: ['c', 'b', 'a'] }, { posicion: ['0'] }, { posicion: ['e', 'd'] }, { posicion: ['ae', 'b', 'c'] }, { posicion: ['c', 'r', 's', 'ab', 'aa'] }, { posicion: ['c', 'r', 's'] }, { posicion: ['z', 'an', 'ab', 's', 'q', 'p', 'e', 'd'] }, { posicion: ['x', 'v', 'k', 'i', 'h', 'g', 'f', 'e', 'd'] }, { posicion: ['w', 'aa', 'ac', 'am', 'r', 'c'] }, { posicion: ['j', 'i', 'h', 'g', 'f', 'e', 'd'] }, { posicion: ['g', 'f', 'e', 'd'] }],
    [{ posicion: ['e', 'd', 'c', 'b', 'a'] }, { posicion: ['e', 'd'] }, { posicion: ['0'] }, { posicion: ['p', 'q', 'am', 'ad'] }, { posicion: ['p', 'q', 'am', 'ac', 'aa'] }, { posicion: ['p', 'q', 's'] }, { posicion: ['z', 'an', 'ab', 's', 'q', 'p'] }, { posicion: ['x', 'v', 'k', 'i', 'h', 'g', 'f'] }, { posicion: ['w', 'aa', 'ac', 'am', 'q', 'p'] }, { posicion: ['j', 'i', 'h', 'g', 'f'] }, { posicion: ['g', 'f', 'p'] }],
    [{ posicion: ['ae', 'a'] }, { posicion: ['ae', 'b', 'c'] }, { posicion: ['p', 'q', 'am', 'ad'] }, { posicion: ['0'] }, { posicion: ['ad', 'ac', 'aa'] }, { posicion: ['ad', 'ac', 'ab'] }, { posicion: ['z', 'ag', 'af'] }, { posicion: ['y', 'z', 'ag', 'af'] }, { posicion: ['w', 'aa', 'ac', 'ad'] }, { posicion: ['j', 'k', 'v', 'w', 'aa', 'ac', 'ad'] }, { posicion: ['ah', 'n', 'ak', 'ab', 'ac', 'ad'] }],
    [{ posicion: ['aa', 'ac', 'ad', 'ae', 'a'] }, { posicion: ['c', 'r', 's', 'ab', 'aa'] }, { posicion: ['p', 'q', 'am', 'ac', 'aa'] }, { posicion: ['ad', 'ac', 'aa'] }, { posicion: ['0'] }, { posicion: ['aa', 'ab'] }, { posicion: ['aa', 'an', 'z'] }, { posicion: ['x', 'w'] }, { posicion: ['w'] }, { posicion: ['j', 'k', 'v', 'w'] }, { posicion: ['ah', 'aj', 'u', 'w'] }],
    [{ posicion: ['s', 'r', 'b', 'a'] }, { posicion: ['c', 'r', 's'] }, { posicion: ['p', 'q', 's'] }, { posicion: ['ad', 'ac', 'ab'] }, { posicion: ['aa', 'ab'] }, { posicion: ['0'] }, { posicion: ['ab', 'an', 'z'] }, { posicion: ['t', 'u', 'x'] }, { posicion: ['t', 'u'] }, { posicion: ['j', 'k', 'v', 'u', 't'] }, { posicion: ['ah', 'aj', 't'] }],
    [{ posicion: ['z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['z', 'an', 'ab', 's', 'q', 'p', 'e', 'd'] }, { posicion: ['z', 'an', 'ab', 's', 'q', 'p'] }, { posicion: ['z', 'ag', 'af'] }, { posicion: ['aa', 'an', 'z'] }, { posicion: ['ab', 'an', 'z'] }, { posicion: ['0'] }, { posicion: ['y'] }, { posicion: ['x', 'y'] }, { posicion: ['j', 'k', 'v', 'x', 'y'] }, { posicion: ['h', 'i', 'k', 'v', 'x', 'y'] }],
    [{ posicion: ['y', 'z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['x', 'v', 'k', 'i', 'h', 'g', 'f', 'e', 'd'] }, { posicion: ['x', 'v', 'k', 'i', 'h', 'g', 'f'] }, { posicion: ['y', 'z', 'ag', 'af'] }, { posicion: ['x', 'w'] }, { posicion: ['t', 'u', 'x'] }, { posicion: ['y'] }, { posicion: ['0'] }, { posicion: ['x'] }, { posicion: ['j', 'k', 'v', 'x'] }, { posicion: ['h', 'i', 'k', 'v', 'x'] }],
    [{ posicion: ['x', 'y', 'z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['w', 'aa', 'ac', 'am', 'r', 'c'] }, { posicion: ['w', 'aa', 'ac', 'am', 'q', 'p'] }, { posicion: ['w', 'aa', 'ac', 'ad'] }, { posicion: ['w'] }, { posicion: ['t', 'u'] }, { posicion: ['x', 'y'] }, { posicion: ['x'] }, { posicion: ['0'] }, { posicion: ['v', 'k', 'j'] }, { posicion: ['h', 'i', 'k', 'v'] }],
    [{ posicion: ['j', 'k', 'v', 'x', 'y', 'z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['j', 'i', 'h', 'g', 'f', 'e', 'd'] }, { posicion: ['j', 'i', 'h', 'g', 'f'] }, { posicion: ['j', 'k', 'v', 'w', 'aa', 'ac', 'ad'] }, { posicion: ['j', 'k', 'v', 'w'] }, { posicion: ['j', 'k', 'v', 'u', 't'] }, { posicion: ['j', 'k', 'v', 'x', 'y'] }, { posicion: ['j', 'k', 'v', 'x'] }, { posicion: ['v', 'k', 'j'] }, { posicion: ['0'] }, { posicion: ['h', 'i', 'j'] }],
    [{ posicion: ['g', 'f', 'e', 'd', 'c', 'b', 'a'] }, { posicion: ['g', 'f', 'e', 'd'] }, { posicion: ['g', 'f', 'p'] }, { posicion: ['ah', 'n', 'ak', 'ab', 'ac', 'ad'] }, { posicion: ['ah', 'aj', 'u', 'w'] }, { posicion: ['ah', 'aj', 't'] }, { posicion: ['h', 'i', 'k', 'v', 'x', 'y'] }, { posicion: ['h', 'i', 'k', 'v', 'x'] }, { posicion: ['h', 'i', 'k', 'v'] }, { posicion: ['h', 'i', 'j'] }, { posicion: ['0'] }],




  ]
  );
  const [images, setImages] = useState(
    [
      { source: require('@img/a.png'), opacity: 1, name: 'a' },
      { source: require('@img/b.png'), opacity: 1, name: 'b' },
      { source: require('@img/c.png'), opacity: 1, name: 'c' },
      { source: require('@img/d.png'), opacity: 1, name: 'd' },
      { source: require('@img/e.png'), opacity: 1, name: 'e' },
      { source: require('@img/f.png'), opacity: 1, name: 'f' },
      { source: require('@img/g.png'), opacity: 1, name: 'g' },
      { source: require('@img/h.png'), opacity: 1, name: 'h' },
      { source: require('@img/i.png'), opacity: 1, name: 'i' },
      { source: require('@img/j.png'), opacity: 1, name: 'j' },
      { source: require('@img/k.png'), opacity: 1, name: 'k' },
      { source: require('@img/l.png'), opacity: 1, name: 'l' },//AI-EXT => L ahora, es una pequena difurcasion que me di cuenta luego
      { source: require('@img/m.png'), opacity: 1, name: 'm' },
      { source: require('@img/n.png'), opacity: 1, name: 'n' },
      { source: require('@img/o.png'), opacity: 1, name: 'o' },
      { source: require('@img/p.png'), opacity: 1, name: 'p' },
      { source: require('@img/q.png'), opacity: 1, name: 'q' },
      { source: require('@img/r.png'), opacity: 1, name: 'r' },
      { source: require('@img/s.png'), opacity: 1, name: 's' },
      { source: require('@img/t.png'), opacity: 1, name: 't' },
      { source: require('@img/u.png'), opacity: 1, name: 'u' },
      { source: require('@img/v.png'), opacity: 1, name: 'v' },
      { source: require('@img/w.png'), opacity: 1, name: 'w' },
      { source: require('@img/x.png'), opacity: 1, name: 'x' },
      { source: require('@img/y.png'), opacity: 1, name: 'y' },
      { source: require('@img/z.png'), opacity: 1, name: 'z' },
      { source: require('@img/aa.png'), opacity: 1, name: 'aa' },
      { source: require('@img/ab.png'), opacity: 1, name: 'ab' },
      { source: require('@img/ac.png'), opacity: 1, name: 'ac' },
      { source: require('@img/ad.png'), opacity: 1, name: 'ad' },
      { source: require('@img/ae.png'), opacity: 1, name: 'ae' },
      { source: require('@img/af.png'), opacity: 1, name: 'af' },
      { source: require('@img/ag.png'), opacity: 1, name: 'ag' },
      { source: require('@img/ah.png'), opacity: 1, name: 'ah' },
      { source: require('@img/ai.png'), opacity: 1, name: 'ai' },
      { source: require('@img/aj.png'), opacity: 1, name: 'aj' },
      { source: require('@img/ak.png'), opacity: 1, name: 'ak' },
      { source: require('@img/am.png'), opacity: 1, name: 'am' },
      { source: require('@img/an.png'), opacity: 1, name: 'an' },
    ]

  );

  const funca = (a) => {
    console.log('funca...');                     //en vez de pasarle 'b' LE PASAS POR PARAMETRO UN VALOR
    //console.log(images);
    let ia = images.map(el => (
      el.name === a ? { ...el, opacity: 0 } : el
    ));
    //console.log(imagess);
    setImages(images => images.map(el => (
      el.name === a ? { ...el, opacity: 0 } : el
    )));
    //console.log('ia');
    //console.log(ia);
  };
  const funcionnOpacity2 = (camino,posicionSiguiente) => {                          //change and passing parameter and ceros for value parameter
    console.log('123opacidad...');                     //en vez de pasarle 'b' LE PASAS POR PARAMETRO UN VALOR
    //let images=this.state.images;
    //console.log(camino);
    if (posiciones.length == 2) {
      if (posiciones[1] == posicionSiguiente) {

      }
      else{
        for (let index = 0; index < camino.length; index++) {
          const element = camino[index];
          funca(element);
          //console.log(element);
        }


        //agregar posicion
        posiciones.push(posicionSiguiente);
      }
    }
    else {
      if (posiciones[posiciones.length - 1] == posicionSiguiente) {

      }
      else {
        for (let index = 0; index < camino.length; index++) {
          const element = camino[index];
          funca(element);
          //console.log(element);
        }


        //agregar posicion
        posiciones.push(posicionSiguiente);
      }
    }


    console.log(posiciones);
    console.log("posicion agregada =>"+posiciones[posiciones.length - 1]);
    // console.log(matriz[5]);
  };
  const funcionnOpacity = (camino) => {                          //change and passing parameter and ceros for value parameter
    console.log('123opacidad...');                     //en vez de pasarle 'b' LE PASAS POR PARAMETRO UN VALOR
    //let images=this.state.images;
    //console.log(camino);
    if (posiciones.length == 2) {
      if (posiciones[1] == posiciones[0]) {

      }
    }
    else {
      if (posiciones[posiciones.length - 1] == posiciones[posiciones.length - 2]) {

      }
      else {
        for (let index = 0; index < camino.length; index++) {
          const element = camino[index];
          funca(element);
          //console.log(element);
        }


        //agregar posicion
        posiciones.push('almacen');
      }
    }


    console.log(posiciones);
    console.log("posicion agregada"+posicionagregadaposiciones[posiciones.length - 1]);
    // console.log(matriz[5]);
  };
  const funcionOpacidadBasica = () => {

    console.log('opacidad...');                     //en vez de pasarle 'b' LE PASAS POR PARAMETRO UN VALOR

    let images = images.map(el => (
      el.name === 'a' ? { ...el, opacity: 0 } : el
    ));
    setImages(images);
    //agregar posicion
    posiciones.push('almacen');
    console.log(posiciones);
  };



  return (
    <View style={styles.inicio_View}>
      <View style={{ flex: 2, zIndex: 10, paddingTop: 1.5 }}>
        <Image style={styles.imagenMapa} source={require('@img/testmandados_LaCasaModificado.jpg')} />
        <>
          {images.map((img, i) =>
            <Image style={{ top: 350, left: 195, position: 'absolute', opacity: img.opacity }} source={img.source} key={i} />
          )
          }
        </>
        <View style={{
          backgroundColor: 'green',
          alignContent: 'center', justifyContent: 'center', flexDirection: 'row',
          borderRadius: 30 / 2, height: 30, width: 30,
          top: -30, left: 640, zIndex: 12
        }}>
          <TouchableOpacity onPress={() => { funcionnOpacity2(almacen,'zapatero') }}>
            <Text style={{ fontSize: 10 }}>ZAPATERO</Text>
          </TouchableOpacity>

        </View>
        <View style={{
          backgroundColor: 'green',
          alignContent: 'center', justifyContent: 'center', flexDirection: 'row',
          borderRadius: 30 / 2, height: 30, width: 30,
          top: -96, left: 535, zIndex: 12
        }}>
          <TouchableOpacity onPress={() => { funcionnOpacity2(almacen,'correo') }}>
            <Text style={{ fontSize: 10 }}>CORREO</Text>
          </TouchableOpacity>

        </View>
        <View style={{
          backgroundColor: 'green',
          alignContent: 'center', justifyContent: 'center', flexDirection: 'row',
          borderRadius: 30 / 2, height: 30, width: 30,
          top: -66, left: 342, zIndex: 12
        }}>
          <TouchableOpacity onPress={() => { funcionnOpacity2(almacen,'cafe') }}>
            <Text style={{ fontSize: 10 }}>CAFE</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          backgroundColor: 'green',
          alignContent: 'center', justifyContent: 'center', flexDirection: 'row',
          borderRadius: 30 / 2, height: 30, width: 30,
          top: -66, left: 258, zIndex: 12
        }}>
          <TouchableOpacity onPress={() => { funcionnOpacity2(almacen,'almacen') }}>
            <Text style={{ fontSize: 10 }}>ALMACEN</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          backgroundColor: 'green',
          alignContent: 'center', justifyContent: 'center', flexDirection: 'row',
          borderRadius: 30 / 2, height: 30, width: 30,
          top: -73, left: 462, zIndex: 12
        }}>
          <TouchableOpacity onPress={() => { funcionnOpacity2(almacen,'oficina') }}>
            <Text style={{ fontSize: 10 }}>OFICINA</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          backgroundColor: 'green',
          alignContent: 'center', justifyContent: 'center', flexDirection: 'row',
          borderRadius: 30 / 2, height: 30, width: 30,
          top: -66, left: 650, zIndex: 12
        }}>
          <TouchableOpacity onPress={() => { funcionnOpacity2(almacen,'estacion') }}>
            <Text style={{ fontSize: 10 }}>ESTACION</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          backgroundColor: 'green',
          alignContent: 'center', justifyContent: 'center', flexDirection: 'row',
          borderRadius: 30 / 2, height: 30, width: 30,
          top: -46, left: 650, zIndex: 12
        }}>
          <TouchableOpacity onPress={() => { funcionnOpacity2(almacen,'kiosko') }}>
            <Text style={{ fontSize: 10 }}>KIOSKO</Text>
          </TouchableOpacity>

        </View>
        <View style={{
          backgroundColor: 'green',
          alignContent: 'center', justifyContent: 'center', flexDirection: 'row',
          borderRadius: 30 / 2, height: 30, width: 30,
          top: -98, left: 520, zIndex: 12
        }}>
          <TouchableOpacity onPress={() => { funcionnOpacity2(almacen,'amiga') }}>
            <Text style={{ fontSize: 10 }}>AMIGA</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          backgroundColor: 'green',
          alignContent: 'center', justifyContent: 'center', flexDirection: 'row',
          borderRadius: 30 / 2, height: 30, width: 30,
          top: -45, left: 570, zIndex: 12
        }}>
          <TouchableOpacity onPress={() => { funcionnOpacity2(almacen,'libreria') }}>
            <Text style={{ fontSize: 10 }}>LIBRERIA</Text>
          </TouchableOpacity>

        </View>

        {/* <TouchableOpacity  -103   395
          style={{ left:334,backgroundColor:'yellow',zIndex:20,justifyContent: 'center', borderRadius: 40 / 2, height: 40, width: 40, borderWidth: 3, borderColor: 'lightgrey' }}
          onPress={() => { funcionnOpacity(almacen) }}
        >
          <Text style={{ fontSize: 8, textAlign: 'center', }}>oficina</Text>
        </TouchableOpacity> */}


      </View>
      <View style={{
        backgroundColor: 'green',
        alignContent: 'center', justifyContent: 'center', flexDirection: 'row',
        borderRadius: 30 / 2, height: 30, width: 30,
        top: 240, left: 390, zIndex: 20
      }}>
        <TouchableOpacity style={{}} onPress={() => { funcionnOpacity2(almacen,'panaderia') }}>
          <Text style={{ fontSize: 10 }}>panaderia</Text>
        </TouchableOpacity>

      </View>
      <View style={{ position: 'relative', zIndex: 10, top: 150, alignContent: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 3, marginBottom: 10, left: -280 }}>
        <Clock />
      </View>

      <View style={{ zIndex: 10, top: 150, alignContent: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 3, marginBottom: 10, left: -277 }}>
        <TouchableOpacity
          style={[styles.inicio_Button,]}
          onPress={() => navigation.navigate('Revision_General')}>
          <Text style={styles.inicio_Text}>Terminar</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={[styles.inicio_Button,]}
          onPress={() => { setModalVisible(!modalVisible); }}>
          <Text style={{
            fontSize: 28,
            alignContent: 'center', justifyContent: 'center',
            alignItems: 'center', textAlign: 'center',
          }}>Informacion</Text>
        </TouchableOpacity> */}
      </View>

      <View style={{
        zIndex: 10, top: -110, alignContent: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 3,
        marginBottom: 10, left: -277
      }}>
        {/* informacion */}

      </View>








      <View style={[styles.RevisionGeneral_Button_Calle, { top: 41, zIndex: 10 }]}>
        {/* <TouchableOpacity 
                style={{justifyContent:'center',borderRadius: 40/2, height:40,width:40,borderWidth: 3,borderColor:'lightgrey'}}
                onPress={()=>{}}
              >
                  <Text style={{fontSize:25,textAlign:'center'}}></Text>
              </TouchableOpacity> */}
      </View>
      <View styles={{}}>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => { Alert.alert("Modal fue cerrado."); }}
        >
          <View style={{ zIndex: 10, left: 10, top: 300, transform: [{ rotate: '90 deg' }], backgroundColor: 'white' }}>
            <View style={{ backgroundColor: "#AABECF", padding: 20, borderRadius: 3 }}>
              <Text style={{}}>Esta tarea consiste en hacer varios mandados. Tenés que salir de tu hogar a las 9:15 hs., hacer varios mandados o diligencias y estar de regreso a las 13:00 hs. Para recorrer el camino de tu hogar a la estación, se tardan 30 minutos. La oficina donde se pagan los impuestos cierra a las 10 hs. Los negocios y el correo cierran a las 12:00 hs. y la panadería abre después de las 11:00 hs. Tenés que hacer las siguientes tareas</Text>
              <TouchableHighlight
                style={{ backgroundColor: "#34495E" }}
                onPress={() => { setModalVisible(modalVisible => !modalVisible); }}
              >
                <Text style={{ color: 'white' }}>continuar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )

}


const styles = StyleSheet.create({
  imagenMapa: { top: 350, left: 195, opacity: 1 },
  RevisionGeneral_Button_info: {
    backgroundColor: 'lightblue', alignContent: 'center',
    flexDirection: 'row',
    borderRadius: 40 / 2,
    height: 40, width: 40,
    top: 30, left: 43,
  },
  RevisionGeneral_Button_Calle: {
    alignContent: 'center',
    flexDirection: 'row',
    transform: [{ rotate: '66 deg' }],
    height: 120, width: 10,
    left: 162,
  },
  inicio_View: {
    //flexDirection:'column',
    backgroundColor: 'lightgrey',
    flex: 1,                                          // volver a colocar
    alignContent: 'center', justifyContent: 'center',
    transform: [{ rotate: '90 deg' }],
    //width:Dimensions.get('window').height,
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').height,
    // height:Dimensions.get('window').width,
  },
  inicio_Text: {
    fontSize: 30,
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center', textAlign: 'center',
  },
  inicio_Title: {
    fontSize: 30,
    alignContent: 'center', justifyContent: 'center',
    backgroundColor: 'blue', textAlign: 'center',
  },
  inicio_Logo: {
    fontSize: 30,
    position: 'relative',
    alignContent: 'center', justifyContent: 'center',
    textAlign: 'center',
  },
  inicio_Button: {
    fontSize: 30,
    borderRadius: 10,

    width: 180,
    backgroundColor: '#AABECF',
    padding: 10,
    elevation: 2,
    justifyContent: "center", alignItems: "center",
    textAlign: 'center',
  },
  inicio_ButtonTime: {
    fontSize: 30,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    width: 200,
    backgroundColor: '#AABECF',
    padding: 10,
    elevation: 2,
    justifyContent: "center", alignItems: "center",
    textAlign: 'center',
  },
});

export default Juego_Mapa;