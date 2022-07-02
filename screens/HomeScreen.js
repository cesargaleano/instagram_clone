import React from 'react';
import {View, Text, StyleSheet,ScrollView } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../components/home/Header';
import {Products} from '.././mockups/products';
import { ProductCard } from '../components/product/ProductCard';
import { Stories } from '../components/home/Stories';
import { Post } from '../components/home/Post';
import {POSTS} from '../mockups/posts';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <Stories />
        <ScrollView vertical>
        {POSTS.map((post,index)=>(
            <Post key={index} post={post}/>
        ))}
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        
        

    }
});

