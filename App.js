import React from 'react';
import {
  StyleSheet,
  View,
  useColorScheme,Text,
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import Inicio from './screens/Inicio';
import Datos from './screens/Datos';
import RevisionGeneral from './screens/RevisionGeneral';
import Juego_Mapa from './screens/Juego_Mapa';
import Juego_Recorrido from './screens/Juego_Recorrido';

const Stack= createStackNavigator();

const App= () => {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    // <View style={{backgroundColor:"green",flex:1,flexDirection:'column'}}>
    //   <Juego_Mapa/>
    //   <Text>hola</Text>
    // </View>
    <NavigationContainer>
<Stack.Navigator>
    <Stack.Screen name="Inicio" component={Inicio} />
    <Stack.Screen name="Datos" component={Datos} />
    <Stack.Screen name="Revision_General" component={RevisionGeneral} />
    <Stack.Screen name="Juego_Mapa" component={Juego_Mapa} />
    <Stack.Screen name="Juego_Recorrido" component={Juego_Recorrido} />
  </Stack.Navigator>
    </NavigationContainer>

    
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
