import React, { useState} from 'react';
import {Text, Image, StyleSheet, View, TextInput, Modal, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
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

    const [slider,openSlider] = useState(false);

    // #000000AA
    return(
        <View style={styles.post}>
            <Modal visible={slider} animationType="slider" transparent={true}>
                <TouchableWithoutFeedback onPress={()=>openSlider(false)}>
                    <View style={{flex:1,justifyContent:'flex-end',backgroundColor:'#000000AA'}}>
                        <View style={{display:'flex',margin:14,borderRadius:10}}>
                            <TouchableOpacity style={styles.popUpFirstOptionsStyle} onPress={()=>{openSlider(false)}}>
                                <Text style={{color:'red',fontSize:18}}>Report</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.popUpMiddleOptionsStyles} onPress={()=>{openSlider(false)}}>
                                <Text style={{fontSize:18}}>Copy Link</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.popUpMiddleOptionsStyles} onPress={()=>{openSlider(false)}}>
                                <Text style={{fontSize:18}}>Share to...</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.popUpMiddleOptionsStyles} onPress={()=>{openSlider(false)}}>
                                <Text style={{fontSize:18}}>Turn On Post Notifications</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.popUpMiddleOptionsStyles} onPress={()=>{openSlider(false)}}>
                                <Text style={{fontSize:18}}>Mute</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.popUpLastOptionsStyle} onPress={()=>{openSlider(false)}}>
                                <Text style={{fontSize:18}}>Unfollow</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cancel} onPress={()=>{openSlider(false)}}>
                                <Text style={{fontSize:18}}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>  
            <View style={styles.postHeader}>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Image source={defaultImg} style={{height:40,width:40,borderRadius:50}}/>
                    <Text style={{marginLeft:15,fontSize:18}}>abcdefghijk</Text>
                </View>
                <TouchableOpacity onPress={()=>{openSlider(true)}}>
                    <Image source={threeDots} style={{height:30,width:30}}/>
                </TouchableOpacity>
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
    },
    popUpFirstOptionsStyle:{
        backgroundColor:'white',
        height:48,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    popUpLastOptionsStyle:{
        backgroundColor:'white',
        height:48,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderTopWidth:1,
        borderTopColor:'lightgrey',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    popUpMiddleOptionsStyles:{
        backgroundColor:'white',
        height:48,
        borderTopWidth:1,
        borderTopColor:'lightgrey',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    cancel:{
        backgroundColor:'white',
        height:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        borderRadius:10
    }
})

export default Posts;