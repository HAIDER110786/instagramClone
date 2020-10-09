import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const homeA = require('../assets/footerIcons/homeA.png');
const homeU = require('../assets/footerIcons/homeU.png');
const searchA = require('../assets/footerIcons/searchA.png');
const searchU = require('../assets/footerIcons/searchU.png');
const plusA = require('../assets/footerIcons/plusA.png');
const plusU = require('../assets/footerIcons/plusU.png');
const heartA = require('../assets/footerIcons/heartA.png');
const heartU = require('../assets/footerIcons/heartU.png');
const meA = require('../assets/footerIcons/meA.png');
const meU = require('../assets/footerIcons/meU.png');

const Footer = () => {
    return(
        <View style={styles.footer}>
            <Image source={homeA} style={styles.footerIcons}/>
            <Image source={searchU} style={styles.footerIcons}/>
            <Image source={plusU} style={styles.footerIcons}/>
            <Image source={heartU} style={styles.footerIcons}/>
            <Image source={meU} style={styles.footerIcons}/>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        height:60,
        backgroundColor:'white',
        borderTopWidth:1,
        borderTopColor:'lightgrey',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    footerIcons:{
        height:40,
        width:40,
        marginTop:7
    }
})

export default Footer;