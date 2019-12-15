import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ball from './source/Ball.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Ball />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});