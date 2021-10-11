

import React, { useState, useEffect }  from 'react';
// import Realm from 'C:\Users\Andre\nodeProyect\TestMandados\REALMDB.js';
import 'react-native-gesture-handler';
import {Text,View,StyleSheet,Animated} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, } from '@react-navigation/native';
import Inicio from './screens/Inicio.js';
import Datos from './screens/Datos.js';
 import RevisionGeneral from './screens/RevisionGeneral';
import Juego_Mapa from './screens/Juego_Mapa';
 import Juego_Recorrido from './screens/Juego_Recorrido';
 import Puntuaciones from './screens/Puntuaciones';
 
 import Instrucciones from './screens/Instrucciones';
const Stack= createStackNavigator();

const App= () => {
  
  return (
     <View style={{flex:1,flexDirection:'column'}}>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{ headerShown: false}}>
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="Juego_Mapa" component={Juego_Mapa} />
          <Stack.Screen name="Datos" component={Datos} />
          <Stack.Screen name="Revision_General" component={RevisionGeneral} /> 
          <Stack.Screen name="Puntuaciones" component={Puntuaciones} /> 
          <Stack.Screen name="Juego_Recorrido" component={Juego_Recorrido} /> 
          <Stack.Screen name="Juego_Instrucciones" component={Instrucciones} />
        </Stack.Navigator>
      </NavigationContainer>

    </View>
    
  );
};

export default App;
