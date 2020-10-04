import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Story from './story';
import MyStory from './myStory';

const Statusbar = () => {
    return(
    <View style={styles.Statusbar}>
        <ScrollView horizontal 
        showsHorizontalScrollIndicator={false}>
            <MyStory/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    Statusbar: {
        padding: 15,
        paddingHorizontal:10,
        borderBottomColor:'lightgrey',
        borderBottomWidth:1,
    },
})

export default Statusbar;