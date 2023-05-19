import React, { useState } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';
import Draggable from 'react-native-draggable';

const Balance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  square: {
    marginTop: 20,
    marginLeft: 20,
    width: 70,
    height: 70,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
});

export default Balance;
