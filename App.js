import React from 'react';
import Temp from './components/fileBeforeAppJS';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Temp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

//free react native website ***https://snack.expo.io/***
