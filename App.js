import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListCategory from './src/Screens/ItemListCategory';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';

export default function App() {
  
  const [categorySelected, setCategorySelected] = useState("");


  const [fontstLoaded] = useFonts({
    //'Agdasima': require('./src/Assets/Agdasima/Agdasima-Bold.ttf'),
    'Agdasima': require('./src/Assets/Agdasima/Agdasima-Regular.ttf')
  });

  //si no hay fuents no se muestra
  if (!fontstLoaded) {
    return null;
  }

  return (
    <View style = {styles.container}>
      <Header goBack= {() => setCategorySelected("")} />
      {/* si tengo una categoria seleccionada muestro el contenido de esa categoria, de lo contrario
      muestro la home o lista de categorias. */}
      {
        categorySelected ? 
        <ItemListCategory category = {categorySelected} 
                          setCategory = {setCategorySelected}/> 
                        : <Home setCategorySelected = {setCategorySelected}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
