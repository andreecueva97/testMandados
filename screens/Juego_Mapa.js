import React from 'react';
import {
  SafeAreaView,Image,
  StyleSheet,Dimensions,
  Text,View,TouchableOpacity,TouchableHighlight,
  useColorScheme,Modal, ImageBackground,
} from 'react-native';

class Juego_Mapa extends React.Component{
    constructor(props){
        super(props);
        this.state={
          modalVisible:false,//everything true, change later
        }
    }
    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
  }

    render(){
      const {modalVisible}=this.state;
      return(
        <View style={styles.inicio_View}>
        {/* <Text style ={{top:347,textAlign:'center',backgroundColor:'white',alignContent:'center',justifyContent:'center'}}>ACA JUEGO MAPA</Text>
        <View style={[styles.inicio_Title,{top:340,zIndex:-10}]}>
          <Text style={styles.inicio_Text}>Test de los Mandados</Text>
        </View> */}
        <View   style={{flex:2,zIndex:10,paddingTop:1}}>
 
         <Image 
              style={{top:320,left:100,}}
              source={require('@img/testmandados_LaCasaModificado.jpg')} 
          />   
          
          <Image 
              style={{top:320,left:100,position:'absolute'}}
              source={require('@img/b.png')}
          />  
            
          
         <Image 
              style={{top:320,left:100,position:'absolute'}}
              source={require('@img/a.png')}
          />  
          <Image 
              style={{top:320,left:100,position:'absolute'}}
              source={require('@img/c.png')}
          />  

        </View>     
           
        <View style={{zIndex:10,top:270,alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 10,left:40}}>
        <TouchableOpacity 
            style={[styles.inicio_Button,{left:210}]}
            onPress={() => { this.props.navigation.navigate('Revision_General') }}
          >
              <Text style={styles.inicio_Text}>Terminar</Text>
          </TouchableOpacity>
        </View>
        <View style={{zIndex:10,top:240,alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 0}}>
        <TouchableOpacity 
            style={[styles.inicio_ButtonTime,{left:10,alignContent: 'center', justifyContent: 'center',textAlign:'center'}]}
            onPress={()=>{}}
          >
              <Text style={styles.inicio_Text}>00:00:00</Text>
          </TouchableOpacity>
          
        </View>
        <View style={[styles.RevisionGeneral_Button_info,{top:140}]}>
            <TouchableOpacity 
                style={{justifyContent:'center',borderRadius: 40/2, height:40,width:40,borderWidth: 3,borderColor:'lightgrey'}}
                onPress={() => { this.setModalVisible(!modalVisible); }}
              >
                  <Text style={{fontSize:14,textAlign:'center'}}>info</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.RevisionGeneral_Button_info,{top:-180}]}>
            <TouchableOpacity 
                style={{justifyContent:'center',borderRadius: 40/2, height:40,width:40,borderWidth: 3,borderColor:'lightgrey'}}
                onPress={()=>{}}
              >
                  <Text style={{fontSize:25,textAlign:'center'}}>≡</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.RevisionGeneral_Button_Calle,{top:41,zIndex:10}]}>
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
                    <View style={{zIndex:10,left:10,top:300,transform:[{rotate: '90 deg'}],backgroundColor:'white'}}>
                        <View style={{backgroundColor:"#AABECF",padding:20,borderRadius:3}}>
                            <Text style={{}}>Esta tarea consiste en hacer varios mandados. Tenés que salir de tu hogar a las 9:15 hs., hacer varios mandados o diligencias y estar de regreso a las 13:00 hs. Para recorrer el camino de tu hogar a la estación, se tardan 30 minutos. La oficina donde se pagan los impuestos cierra a las 10 hs. Los negocios y el correo cierran a las 12:00 hs. y la panadería abre después de las 11:00 hs. Tenés que hacer las siguientes tareas</Text>
                            <TouchableHighlight
                                style={{ backgroundColor: "#34495E" }}
                                onPress={() => { this.setModalVisible(!modalVisible); }}
                            >
                                <Text style={{color:'white'}}>continuar</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
    </View>  
      )
  }
}


const styles = StyleSheet.create({
  RevisionGeneral_Button_info:{
        backgroundColor:'lightblue',alignContent: 'center',
        flexDirection: 'row', 
        borderRadius: 40/2, 
        height:40,width:40,
        top:30, left:43,
      },
  RevisionGeneral_Button_Calle:{
        alignContent: 'center',
        flexDirection: 'row', 
        transform:[{rotate: '66 deg'}],
        height:120,width:10,
         left:162,
  },
  inicio_View:{
    //flexDirection:'column',
    backgroundColor:'lightgrey',
    flex:1,                                          // volver a colocar
    alignContent: 'center', justifyContent: 'center',
    transform:[{rotate: '90 deg'}],
    //width:Dimensions.get('window').height,
    height:Dimensions.get('window').width,
    width:Dimensions.get('window').height,
    // height:Dimensions.get('window').width,
  },
  inicio_Text:{
    fontSize:30,
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center',textAlign:'center',
  },
  inicio_Title:{
    fontSize:30,
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
    
    width:180,
    backgroundColor:'#AABECF',
    padding: 10,
    elevation: 2,
    justifyContent: "center",alignItems: "center",
    textAlign:'center',
  },
  inicio_ButtonTime:{
    fontSize:30,
    borderRadius:10,
    borderColor:'grey',
    borderWidth:1,
    width:200,
    backgroundColor:'#AABECF',
    padding: 10,
    elevation: 2,
    justifyContent: "center",alignItems: "center",
    textAlign:'center',
  },
});

export default Juego_Mapa;