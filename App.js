import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import { Audio } from 'expo-av';

const colors = ['#F7DC6F', '#A2D9CE', '#D7BDE2'];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState('POMO' | 'SHORT' | 'BREAK');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    
    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1) 
      }, 10)
    } else {
      clearInterval(interval)
    }
    if(time === 0){
      setIsActive(false)
      setIsWorking((prev) => !prev);
      setTime(isWorking ? 300 : 1500)
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStartStop = () => {
    playSound();
    setIsActive(!isActive);
  };

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/shooting-sound-fx-159024.mp3')
    );
    await sound.playAsync();
  }

  return (
    <View style={[styles.container, { backgroundColor: colors[currentTime] }]}>
      <Text style={[styles.text, { marginTop: 30 }]}>Pomodoro</Text>
      <Header
        setCurrentTime={setCurrentTime}
        currentTime={currentTime}
        setTime={setTime}
      />
      <Timer time={time} />
      <TouchableOpacity onPress={handleStartStop} style={styles.button}>
        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 25 }}>
          {isActive ? 'STOP' : 'START'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#333333',
    padding: 15,
    marginTop: 15,
    borderRadius: 10,
  },
});
