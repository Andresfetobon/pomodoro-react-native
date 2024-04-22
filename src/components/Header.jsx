import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const options = ['Pomodoro', 'Short Break', 'Long Break'];

export default function Header({ setCurrentTime, currentTime, setTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }
  return (
    <View style={styles.containerMap}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.itemStyles,
            { borderWidth: 3, padding: 6 },
            currentTime !== index && { borderColor: 'transparent' },
          ]}
        >
          <Text style={{ fontSize: 19, fontWeight: 'bold' }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  containerMap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  itemStyles: {
    borderColor: 'white',
    marginVertical: 20,
    borderRadius: 10,
  },
});
