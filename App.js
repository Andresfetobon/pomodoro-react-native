import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer'

const colors = ['#F7DC6F', '#A2D9CE', '#D7BDE2'];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState('POMO' | 'SHORT' | 'BREAK');

  return (
    <View style={[styles.container, { backgroundColor: colors[currentTime],  }]}>
      <Text style={[styles.text, {marginTop: 30}]}>Pomodoro</Text>
      <Header
        setCurrentTime={setCurrentTime}
        currentTime={currentTime}
        setTime={setTime}
      />
      <Timer time={time}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 15
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
