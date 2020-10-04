import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const cameraImg = require('../assets/Camera.png');
const directMessageImg = require('../assets/DirectMessage.png');

const Header = () => {
    return(
        <View style={styles.header}>
            <Image source={cameraImg} style={styles.cameraImage}/>
            <Text style={styles.headerText}>Instagram</Text>
            <Image source={directMessageImg} style={styles.directMessageImage}/>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
      display:'flex',
      flexDirection:'row',
      alignItems:'center', 
      justifyContent:'space-between',
      padding:15,
      borderBottomWidth:1,
      borderBottomColor:'lightgrey'
  },
  headerText:{
      color:'#000',
      fontSize:25,
  },
  cameraImage:{
      height:35,
      width:40,
  },
  directMessageImage:{
    height:35,
    width:35
  }
});


export default Header;