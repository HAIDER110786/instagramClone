import React from 'react';
import Header from './components/header';
import Taskbar from './components/taskbar';
import Statusbar from './components/statusbar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Taskbar/>
      <Header/>
      <Statusbar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

//free react native website ***https://snack.expo.io/***
