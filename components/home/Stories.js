import React from 'react';
import {View, Text, Image, ScrollView,StyleSheet} from 'react-native';
import { USERS } from '../../mockups/users';


export const Stories = () => {
  return (
   
    <View style={StyleSheet.StoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        
            {USERS.map((user,index)=>(
                <View  key={index} style={{alignItems:'center'}}>
                <Image style={styles.UserImage} source={{uri:user.avatar}}/>
                 <Text style={styles.UserText}>{user.username.length<10?user.username:user.username.slice(0,10).concat('...')}</Text>   
                </View>
            ))}
        
        </ScrollView>
    </View>
 
  )
};

const styles= StyleSheet.create({
    StoriesContainer:{
        

    },
    
    UserImage:{
        width:60,
        height:60,
        borderRadius:50,
        borderWidth:2,
        borderColor:'orange',
        margin:5
       
    },
    UserText:{
        textAlign:'center',
        fontSize:10
    }


})


