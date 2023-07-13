import { StyleSheet, Text, Image } from 'react-native'

import React from 'react'
import Card from './Card'

const ProductItem = ({item}) => {
  return (
    <Card additionalStyle = {styles.additionalStyle}>
        <Text style={styles.textCategory}>{item.title}</Text>
        <Image resizeMode="contain" 
        style={styles.image} 
        source={{uri: item.images[0]}}/>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10
  },
  additionalStyle: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
  },
})