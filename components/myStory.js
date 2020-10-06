import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
const defaultImg = require('../assets/defaultImg.png');
const bluePlus = require('../assets/bluePlus.jpg');

const MyStory = () => {
    return(
    <View style={styles.myStory}>
        <Image style={styles.myDP} source={defaultImg}/>
        <Image style={styles.bluePlus} source={bluePlus}/>
        <Text style={styles.myStoryText}>Your Story</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    myStory:{
        marginHorizontal:10,
        marginTop:10,
    },
    bluePlus:{
        borderRadius:100,
        height:20,
        width:20,
        marginTop:-15,
        marginLeft:45
    },
    myStoryText:{

    },
    myDP:{
        height:70,
        width:70,
        borderRadius:50
    },
})

export default MyStory;