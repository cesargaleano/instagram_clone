import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export const ProductCard = ({product}) => {
    const {name, description, stock, price,category, url} = product;
  return (
    <View style={styles.ProductCardContainer}>
    <View style={styles.ProductCard}>
        <Image 
        style={styles.ProductImage}
        source={{uri:url}} />
        <Text style={styles.ProductName}>{name}</Text>
        <Text style={styles.ProductDescription}>
            {description.length<50?description:
                 description.slice(0,50).concat('...')
        }</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    ProductCardContainer:{
        alignItems:'center',
        
    },
    ProductCard:{
        borderWidth:1,
        width:180,
        height:150,
        borderColor:'lightgrey',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        margin:5

    },
    ProductImage:{
        height:100,
        width:150,
        borderRadius:10,
    },
    ProductDescription:{
        fontSize:8
    }
});