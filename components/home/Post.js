import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';



export const Post = ({post}) => {
  const [isVisibleComments, setIsVisibleComments] = useState(false); 
  return (
    <View style={styles.PostContainer}>
      <PostHeader post={post} />  
      <PostImage post={post} />  
      <PostFooter post={post} /> 

    </View>
  )
}

const PostHeader =({post})=>(
<View style={styles.PostHeaderContainer}>
<View style={styles.PostHeaderLeft}>
<Image style={styles.PostHeaderImage} source={{uri:post.profile_picture}}/>
<Text style={styles.PostHeaderText}>{post.user}</Text>
</View>
<Text style={{marginRight:10, fontWeight:'900'}}>...</Text>
</View>
);

const PostImage =({post})=>(
<View style={{width:'100%', height:350}}>
<Image style={styles.PostImage} source={{uri:post.imageUrl}} />
</View>
);

const PrintComments =({post})=>(
   
    post.comments.map((comment,index)=>(
      <View key={index} style={{flexDirection:'row'}}>
      <Text style ={{marginLeft:5, fontWeight:'900'}}>{comment.user+" "}</Text> 
      <Text>{comment.comment}</Text>   
      </View>))
    
);
const PostFooter =({post})=>(
<View>  
<View style={{flexDirection:'row', justifyContent:'space-between', marginTop:3}}>
<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image style={styles.PostFootericons} source={require('../../assets/dontlike.png')}/>
</TouchableOpacity>
<TouchableOpacity>
<Image style={styles.PostFootericons} source={require('../../assets/comment.png')}/>
</TouchableOpacity>
<TouchableOpacity>
<Image style={styles.PostFootericons} source={require('../../assets/share.png')}/>
</TouchableOpacity>
</View>
<View>
  <TouchableOpacity>
<Image style={styles.PostFootericons} source={require('../../assets/save.png')}/>
</TouchableOpacity>
</View>
</View>
<View>
<Text style ={{marginLeft:5}}>{post.likes + ' likes'}</Text>
</View>

<View style={{flexDirection:'row'}}>
  <Text style={{marginLeft:5, fontWeight:'900'}}>{post.user + " "} </Text>
  <Text>{post.caption}</Text>
  
</View>

{post.comments.length>1? <TouchableOpacity><Text>View All {post.comments.length} Comments</Text></TouchableOpacity>
:<TouchableOpacity ><Text>View Comment</Text></TouchableOpacity>}

{
<PrintComments post={post} />
}
</View>
);


const styles= StyleSheet.create({
  PostHeaderContainer:{
    marginTop:5,
    marginBottom:5,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  PostHeaderImage:{
    height:30,
    width: 30,
    borderRadius:25,
    marginLeft:3,
    marginRight:3

  },
  PostHeaderText:{
    fontSize:10
  },
  PostHeaderLeft:{
    flexDirection:'row',
    alignItems:'center'
  },
  PostContainer:{
    marginTop:1,
    
  },

  PostImage:{
    height: '100%',
    resizeMode:'cover'
    
  },
  PostFootericons:{
    height:20,
    width: 20,
    marginHorizontal:10
  }

})