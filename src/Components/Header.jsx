import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Header = ({goBack}) => {
  return (
    <View 
        style={styles.containerHeader}>
                  <Pressable onPress={goBack}>
                      <Text style={styles.text}>Back</Text>
                </Pressable>
      <Text style ={styles.text}>MercadoFree</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        height: '10%',
        backgroundColor: colors.peach,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontFamily : 'Agdasima',
    }
})