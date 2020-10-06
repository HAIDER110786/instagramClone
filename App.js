import React from 'react';
import Header from './components/header';
import Taskbar from './components/taskbar';
import Statusbar from './components/statusbar';
import Posts from './components/posts';
import { StyleSheet, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Taskbar/>
      <Header/>
      <ScrollView>
        <Statusbar/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

//free react native website ***https://snack.expo.io/***
