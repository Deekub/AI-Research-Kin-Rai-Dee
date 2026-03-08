import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Platform } from 'react-native'; 
import { useApp } from '../context/AppContext';
import { router } from 'expo-router';
import { Accelerometer } from 'expo-sensors';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

export default function RandomMode() {
  const { selectedFood, setWinner } = useApp();
  const [current, setCurrent] = useState(selectedFood[0]);
  
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

  const roll = () => {
    scale.value = 0.5;
    scale.value = withSpring(1);
    const randomIndex = Math.floor(Math.random() * selectedFood.length);
    setCurrent(selectedFood[randomIndex]);
  };

  useEffect(() => {
    let subscription: any = null;
    const subscribe = async () => {
      if (Platform.OS === 'web') return;
      const isAvailable = await Accelerometer.isAvailableAsync();
      if (isAvailable) {
        Accelerometer.setUpdateInterval(100);
        subscription = Accelerometer.addListener(({ x, y, z }) => {
          const totalForce = Math.abs(x) + Math.abs(y) + Math.abs(z);
          if (totalForce > 1.78) roll();
        });
      }
    };
    subscribe();
    return () => { if (subscription) subscription.remove(); };
  }, []);

  const handleSelect = () => {
    setWinner(current);
    router.replace('/result');
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {Platform.OS !== 'web' && (
          <Text style={styles.hint}>👋 Shake phone to re-roll!</Text>
        )}
        
        <Animated.View style={[styles.card, animatedStyle]}>
          <Image 
            source={current.image} 
            style={styles.image} 
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.foodName}>{current.name}</Text>
            <Text style={styles.foodCategory}>{current.category}</Text>
          </View>
        </Animated.View>

        <TouchableOpacity onPress={roll} style={[styles.btn, styles.btnOutline]}>
          <Text style={styles.btnTextOutline}>Random Again</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSelect} style={[styles.btn, styles.btnFill]}>
          <Text style={styles.btnTextFill}>Eat This!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: '#f5f5f5', justifyContent: 'center' },
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center', 
    width: '100%',
    maxWidth: 500, // หน้า Random บีบให้แคบหน่อยจะสวยกว่า
    alignSelf: 'center'
  },
  hint: { textAlign: 'center', marginBottom: 20, color: '#888', fontSize: 16 },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: { width: '100%', height: 300 }, // เพิ่มความสูงรูปนิดนึงสำหรับ Web
  textContainer: { padding: 20, alignItems: 'center' },
  foodName: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  foodCategory: { fontSize: 16, color: '#666' },
  btn: { padding: 15, borderRadius: 10, alignItems: 'center', marginVertical: 5 },
  btnOutline: { borderWidth: 2, borderColor: '#FF6B6B', backgroundColor: 'transparent' },
  btnFill: { backgroundColor: '#FF6B6B' },
  btnTextOutline: { color: '#FF6B6B', fontWeight: 'bold', fontSize: 16 },
  btnTextFill: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});