import React from 'react';
import { Text, StyleSheet } from 'react-native';

import ComponentsScreen from './ComponentsScreen';
import ComponentsSreen from './ComponentsScreen';

const HomeScreen = () => {
  return (
    <>
      <Text style={styles.text}>Minh</Text>
      <ComponentsSreen></ComponentsSreen>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#34ce21',
  },
});

export default HomeScreen;
