import React from 'react';
import {
    StyleSheet, View, Image,
    Text,
    TouchableOpacity, Dimensions
} from 'react-native';
import realm from '../REALMDB.js';

const Instrucciones = ({ navigation }) => {
    return (
        <View style={styles.Instrucciones_View}>
            <View style={styles.Instrucciones_Title}>
                <Text style={styles.Instrucciones_Text}>Instrucciones del Juego</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' ,paddingBottom:"10%"}}>

                {/* <Image
                    style={{ width: 300, height: 300 }}
                    source={require('@img/logo.png')}
                /> */}
                <Text style={{fontSize:25}}>Esta tarea consiste en hacer varios mandados. Tenés que salir de tu hogar a las 9:15 hs., hacer varios mandados o diligencias y estar de regreso a las 13:00 hs. Para recorrer el camino de tu hogar a la estación, se tardan 30 minutos. La oficina donde se pagan los impuestos cierra a las 10 hs. Los negocios y el correo cierran a las 12:00 hs. y la panadería abre después de las 11:00 hs. Tenés que hacer las siguientes tareas</Text>
                            
            </View>
            <View style={{
                alignContent: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 3,
                marginBottom: 10
            }}>
                <TouchableOpacity
                    style={styles.Instrucciones_Button}
                    onPress={() => { navigation.navigate('Datos') }}
                >
                    <Text style={styles.Instrucciones_TextButton}>SIGUIENTE</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={{
                alignContent: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 3,
                marginBottom: 10
            }}>
                <TouchableOpacity
                    style={styles.Instrucciones_Button}
                    onPress={() => { navigation.navigate('Revision_General', { juego: realm.objects('Juego')[realm.objects('Juego').length - 1] }) }}
                >
                    <Text style={styles.Instrucciones_TextButton}>Puntuaciones</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}


const styles = StyleSheet.create({
    Instrucciones_View: {
        flexDirection: 'column', backgroundColor: '#3671A3',
        flex: 1,
        alignContent: 'center', justifyContent: 'center'
    },
    Instrucciones_Text: {
        fontSize: 35,
        alignContent: 'center', justifyContent: 'center',
        alignItems: 'center', textAlign: 'center',
    },
    Instrucciones_TextButton: {
        fontSize: 30,
        alignContent: 'center', justifyContent: 'center',
        alignItems: 'center', textAlign: 'center',
    },
    Instrucciones_Title: {
        fontSize: 30,
        color: 'yellow',
        alignContent: 'center', justifyContent: 'center',
        backgroundColor: '#3671A3', textAlign: 'center',paddingBottom:'10%'
    },
    Instrucciones_Logo: {
        fontSize: 30,
        position: 'relative',
        alignContent: 'center', justifyContent: 'center',
        textAlign: 'center', width: 300,
    },
    Instrucciones_Button: {
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

export default Instrucciones;



