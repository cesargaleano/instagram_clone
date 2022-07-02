import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export const Header = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <Image 
        style={styles.headerLogo}
        source={require('../../assets/logo2.png')}
         />
        </TouchableOpacity>

        <View style = {styles.menuContainer}>
        <TouchableOpacity 
         onPress={() =>
            navigation.navigate('login')
          }>
        <Image 
        style={styles.menuItem}
        source={require('../../assets/login.png')}
        />
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={styles.shoppingCartContainer}>
            <Text style={styles.shoppingCartText}>2</Text>
            </View>
        <Image 
        style={styles.menuItem}
        source={require('../../assets/shopping-cart.png')} />
        </TouchableOpacity>

        </View>

    </View>
    

  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems:'center',
        

    },
    headerLogo:{
        height: 90,
        width: 90,
        resizeMode:'contain',
        marginLeft:10
     },
     menuContainer:{
        flexDirection:'row',
        alignItems:'center'
        
       
     },
     menuItem:{
        height: 40,
        width: 40,
        marginLeft:10,
        marginRight:10,
        
     },

     shoppingCartContainer:{
        backgroundColor:'red',
        width:20,
        borderRadius:25,
        position:'absolute',
        left:30,
        zIndex:100
        
     },

     shoppingCartText:{
        color:'white',
        textAlign:'center'
        
        
     }

})