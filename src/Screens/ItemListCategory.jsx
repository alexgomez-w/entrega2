import { FlatList, StyleSheet, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'

const ItemListCategory = ({  
  category,
  setCategory
}) => {

  const [categorySelected, setCategorySelected] = useState(category)
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  //
  useEffect(()=> {
    console.log("categorySelected: ", categorySelected)
    //Lógica de manejo de category
    const productsFiltered = productsRaw.filter(product => product.category === categorySelected && product.title.includes(keyword.toLowerCase()))
    setProducts(productsFiltered)

  }, [categorySelected, keyword])

  const onSearch = (input) => {

    //regexp que permita letras y numeros y espacios
    const expression3 = /^[a-zA-Z0-9\ ]*$/

    console.log(input)
    const evaluate = expression3.test(input)

    if (evaluate) {
      setKeyword(input)
      setKeywordError("")
    } else {
      console.log("Solo letras y números");
      setKeywordError("Solo letras y números")
    }

    
  }  

  return (
    <View style={[styles.container, styles.item]}>
        <Search
          onSearch={onSearch}
          goBack={()=> setCategory("")}
        />
        {keywordError ? <Text style={{color: 'red'}}>{keywordError}</Text> : null}
        <FlatList
            numColumns={4}
            data = {products}
            keyExtractor={product => product.id}
            renderItem={({item}) => ProductItem({item})}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={styles.columnWrapper}
        />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
    container: {
        height: '90%',
        backgroundColor: colors.lightPink,
        //alignItems: 'center'
    },
    columnWrapper: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    item: {
      flex: 1,
      backgroundColor: '#f9c2ff',
      padding: 1,
      marginVertical: 1,
      marginHorizontal: 1,
    },
})