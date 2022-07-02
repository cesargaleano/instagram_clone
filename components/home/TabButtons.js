import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const TabButtons = () => {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-around', paddingTop:5}}>
      <Image style={styles.TabButtonsImage} source={require('../../assets/home.png')}/>
      <Image style={styles.TabButtonsImage} source={require('../../assets/search.png')}/>
      <Image style={styles.TabButtonsImage} source={require('../../assets/more.png')}/>
      <Image style={styles.TabButtonsImage} source={require('../../assets/dontlike.png')}/>
      <Image style={styles.TabButtonsImage} source={require('../../assets/user.png')}/>
    </View>
  )
};

const styles = StyleSheet.create({
    TabButtonsImage:{
        width:30,
        height:30
    }
})




export default TabButtons