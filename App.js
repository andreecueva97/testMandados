import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,View,
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Inicio from './screens/Inicio';

const App= () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{backgroundColor:"blue",flex:1}}>
      <Inicio/>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
