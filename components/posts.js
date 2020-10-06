import React, { useState} from 'react';
import {Text, Image, StyleSheet, View, TextInput} from 'react-native';
const defaultImg = require('../assets/defaultImg.png');
const threeDots = require('../assets/dots.png');
const comments = require('../assets/comments.png');
const heart = require('../assets/heart.png');
const directMessage = require('../assets/directMessage.png');
const bookMark = require('../assets/bookMark.png');
const heartKB = require('../assets/heartKB.png');
const dontCareKB = require('../assets/dontCareKB.png');
const plusKB = require('../assets/plusKB.png');

const Posts = () => {

    const postText = 'hi there everyone hope you are doing because i am rocking whats up with you daily routine';
    
    const [textLimit,setTextLimit] = useState(postText.length > 65 ? true : false);

    return(
        <View style={styles.post}>
            <View style={styles.postHeader}>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Image source={defaultImg} style={{height:40,width:40,borderRadius:50}}/>
                    <Text style={{marginLeft:15,fontSize:18}}>abcdefghijk</Text>
                </View>
                <Image source={threeDots} style={{height:30,width:30}}/>
            </View>
            <View style={styles.postBody}> 
                <Image source={defaultImg} style={{width:412,height:300}}/>
            </View>
            <View style={styles.postReviews}>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <Image source={heart} style={{height:30,width:33,marginRight:20}}/>
                    <Image source={comments} style={{height:30,width:32,marginRight:20}}/>
                    <Image source={directMessage} style={{height:30,width:32,marginRight:20}}/>
                </View>
                <View>
                    <Image source={bookMark} style={{height:35,width:35}}/>
                </View>
            </View>
            <View style={styles.postlikes}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>1,043 likes</Text>
            </View>
            <View style={styles.postText}>
                <Text style={{fontSize:18}}>
                    <Text style={{ fontWeight:'bold'}}>
                        abcdefghijk 
                    </Text> 
                    { textLimit ? (
                        <Text>
                            {' '+postText.slice(0,65)+'...'}
                            <Text onPress={()=>{setTextLimit(false)}} style={{color:'gray'}}> more</Text>
                        </Text>
                    ) : (
                        <Text>{' '+postText}</Text>
                    ) }
                </Text>
            </View>
            <View style={styles.Comments}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'darkgrey'}}>View all 41 comments</Text>
            </View>
            <View style={styles.postComments}>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <Image source={defaultImg} style={{height:40,width:40,borderRadius:50}}/>
                    <TextInput style={{marginLeft:10,fontSize:18}} placeholder="Add a comment..."/>
                </View>
                <View style={{display:'flex',flexDirection:'row',width:100,justifyContent:'space-around'}}>
                    <Image source={heartKB} style={{height:20,width:20}}/>
                    <Image source={dontCareKB} style={{height:20,width:20}}/> 
                    <Image source={plusKB} style={{height:20,width:20}}/>
                </View>
            </View>
            <View style={styles.postDuration}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'darkgrey'}}>4 hours ago </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    post:{
        paddingBottom:14
    },
    postHeader:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'lightgrey',
        padding:15,
    },
    postBody:{
    },
    postReviews:{
        paddingVertical:12,
        paddingHorizontal:14,
        display:'flex',
        flexDirection:'row',alignItems:'center',
        justifyContent:'space-between'
    },
    postlikes:{
        paddingVertical:0,
        paddingHorizontal:14,
    },
    postText:{
        paddingVertical:3,
        paddingHorizontal:14,
    },
    Comments:{
        paddingHorizontal:14,
        paddingVertical:3,
    },
    postComments:{
        paddingHorizontal:14,
        paddingVertical:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    postDuration:{
        paddingHorizontal:14,
        paddingVertical:3,
    }
})

export default Posts;