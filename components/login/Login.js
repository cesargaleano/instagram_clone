import React from 'react';
import {useState} from 'react';
import { View, Image, StyleSheet, Text, TextInput,TouchableOpacity } from 'react-native';

export const Login = () => {

    const [input, setInput] = useState();

    const onChangeText =()=>{

    };

  return (
    <View style={styles.LoginContainer}>


    <Image style={styles.LoginLogo} source={require('../../assets/login.png')} />
    <View style={styles.LoginInputContainer}>
    <TextInput
        style={styles.LoginUserInput}
        onChangeText={onChangeText}
        value={input}
        placeholder='User'
      />
    </View>
    <View style={styles.LoginInputContainer}>
    <TextInput
        style={styles.LoginUserInput}
        onChangeText={onChangeText}
        value={input}
        placeholder='Password'
        secureTextEntry
      />
    </View>
    <TouchableOpacity>
    <Text>Forgot your Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.LoginButton}>
    <Text style={styles.LoginButtonText}>Login</Text>
    </TouchableOpacity>

        </View>
  )
}


const styles = StyleSheet.create({
    LoginContainer:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    LoginLogo:{
        width:100,
        height:100,
        marginTop:40
    },
    LoginUserInput:{
            width:'80%',
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius:10,
            borderColor: 'lightgrey',
   },

    LoginUserLabel:{
        color:'black',
        width:70
    },
    LoginInputContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    LoginButton:{
        backgroundColor:'blue',
        borderRadius: 10,
        height:40,
        width:'80%',
        justifyContent:'center',
        marginTop:20
    },
    LoginButtonText:{
        textAlign:'center',
        color:'white'
    }

})