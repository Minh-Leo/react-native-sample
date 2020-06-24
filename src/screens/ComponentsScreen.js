import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ComponentsSreen = () => {
  const greeting = 'Hi there';

  return (
    <View>
      <Text style={styles.text}>This is components Screen</Text>
      <Text>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#f48c82',
  },
});

export default ComponentsSreen;
