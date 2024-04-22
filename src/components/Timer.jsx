import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Timer({ time }) {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;
    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formattedTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 50,
  },
  text: {
    textAlign: 'center',
    fontSize: 80,
    fontWeight: 'bold',
    color: '#333333',
  },
});
