import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export const Head = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <Image 
        style={styles.headerLogo}
        source={require('../../assets/instagramlogo.png')}
         />
        </TouchableOpacity>

        <TouchableOpacity>
        <Image 
        style={styles.headerLabel}
        source={require('../../assets/instagram.png')}
         />
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={styles.messengerTextContainer}>
            <Text style={styles.messengerText}>2</Text>
            </View>
        <Image 
        style={styles.messengerLogo}
        source={require('../../assets/messenger.png')} />
        </TouchableOpacity>

    </View>
    

  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems:'center'       

    },
    headerLogo:{
        height: 30,
        width: 30,
        resizeMode:'contain',
        marginLeft:10
     },
     headerLabel:{
        width:90,
        height:30
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

    messengerLogo:{
        width:30,
        height:30,
        marginRight:15,
        marginTop:5
     },
     messengerText:{
        color:'white',
        fontSize:10
        
     },
     messengerTextContainer:{
        width:15,
        height:15,
        borderRadius:6,
        backgroundColor:'red',
        color:'white',
        alignSelf:'center',
        alignItems:'center',
        textAlignVertical:'center',
        position:'absolute',
        top:0,
        zIndex:100
}})