import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
const defaultImg = require('../assets/defaultImg.png');

const Story = () => {
    const text = 'abcdefghijk';
    const textToDisplay = text.length > 8 ? (
        text[0]+text[1]+text[2]+text[3]+text[4]+text[5]+
        text[6]+'...'
    ):(text);

    return(
        <View style={styles.otherStories}>        
        <View style={styles.othersDPoutliner}>
            <Image style={styles.othersDP} source={defaultImg}/>
        </View>
            <Text style={styles.otherStoriesText}>{textToDisplay}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    otherStories:{
        display:'flex',
        alignItems:'center',
        marginHorizontal:10,
    },
    otherStoriesText:{
        marginTop:5
    },
    othersDPoutliner:{
        borderRadius:50,
        padding:5,
        borderWidth:1,
        borderColor:'lightgrey'
    },
    othersDP:{
        height:70,
        width:70,
        borderRadius:50
    },
})

export default Story;