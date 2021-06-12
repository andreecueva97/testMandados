import React from 'react';
import {
    Dimensions,
  StyleSheet,FlatList,
  Text,TouchableOpacity,
  View
} from 'react-native';

class RevisionGeneral extends React.Component{
    constructor(props){
        super(props);

        this.state={
            shouldShow: false,
            filtrarPor:'filtrar por',
        }
    }

    

    render(){
        const {shouldShow}=this.state;
        return(
            <View style={styles.inicio_View}>
            <Text style ={{textAlign:'center',backgroundColor:'white',alignContent:'center',justifyContent:'center'}}>ACA REVISION GENERAL</Text>
            <View style={styles.inicio_Title}>
              <Text style={styles.inicio_Text}>Test de los Mandados</Text>
            </View>          
            <View style={styles.inicio_Logo} >
                <TouchableOpacity    onPress={() => this.setState({ shouldShow: !shouldShow })}>
                    <Text style={styles.inicio_Text}>{this.state.filtrarPor}</Text>
                </TouchableOpacity>
            </View>
            {shouldShow?(
                <View>
                <FlatList
                    data={['filtrar por','dni','edad','nombre','apellido']}
                    style={{ fontSize:24,zIndex: 1, height: 60, backgroundColor: 'white', width:Dimensions.get('window').width, flexGrow: 0, position: 'absolute',  }}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={() => { this.setState({ filtrarPor: item }); this.setState({ shouldShow: !shouldShow }) }}>
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
            data={['ana','junior','flor','anra','juniorr','florr']}
            
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
            <View style={{flex:2,backgroundColor:'red',alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
    marginBottom: 10,top:-180,width:Dimensions.get('window').width/2,left:200,height:100}}>
            <TouchableOpacity 
                style={[styles.inicio_Button,{height:60}]}
                onPress={()=>{}}
              >
                  <Text style={[styles.inicio_Text,{height:60}]}>Terminar</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:2,backgroundColor:'red',alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
    marginBottom: 10,top:-80,width:Dimensions.get('window').width/2,left:200,height:100}}>
            <TouchableOpacity 
                style={[styles.inicio_Button,{height:60}]}
                onPress={()=>{}}
              >
                  <Text style={[{fontSize:15},styles.inicio_Text,]}>Repetir Juego</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.RevisionGeneral_Button_info,{}]}>
            <TouchableOpacity 
                style={{justifyContent:'center',borderRadius: 40/2, height:40,width:40,borderWidth: 3,borderColor:'lightgrey'}}
                onPress={()=>{}}
              >
                  <Text style={{fontSize:14,textAlign:'center'}}>info</Text>
              </TouchableOpacity>
            </View>
        </View>  
        )
    }
}


const styles = StyleSheet.create({
    RevisionGeneral_Button_info:{
        backgroundColor:'white',alignContent: 'center',
        flexDirection: 'row', 
        borderRadius: 40/2, 
        height:40,width:40,
        top:-1, left:10,
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