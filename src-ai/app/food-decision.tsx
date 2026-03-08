import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, useWindowDimensions } from 'react-native';
import { useApp } from '../context/AppContext';
import { router } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function TournamentMode() {
  const { selectedFood, setWinner } = useApp();
  const [candidates, setCandidates] = useState(selectedFood);
  const [roundWinners, setRoundWinners] = useState<any[]>([]);
  const [pairIndex, setPairIndex] = useState(0);

  // Hook เช็คขนาดหน้าจอ
  const { width } = useWindowDimensions();
  // ถ้าจอใหญ่กว่า 768px ถือว่าเป็น Desktop/Tablet ให้เรียงแนวนอน
  const isLargeScreen = width > 768; 

  useEffect(() => {
    if (candidates.length === 1) {
      setWinner(candidates[0]);
      router.replace('/result');
    }
  }, [candidates]);

  const left = candidates[pairIndex];
  const right = candidates[pairIndex + 1];

  const handleChoice = (winnerItem: any) => {
    const currentRoundWinners = [...roundWinners, winnerItem];
    const nextPairIndex = pairIndex + 2;

    if (nextPairIndex >= candidates.length - 1) {
      let finalWinners = currentRoundWinners;
      if (candidates.length % 2 !== 0) {
        finalWinners.push(candidates[candidates.length - 1]);
      }
      setCandidates(finalWinners);
      setRoundWinners([]); 
      setPairIndex(0); 
    } else {
      setRoundWinners(currentRoundWinners);
      setPairIndex(nextPairIndex);
    }
  };

  if (!left || !right) return <View style={styles.container} />;

  return (
    // เปลี่ยน flexDirection ตามขนาดจอ
    <View style={[styles.container, { flexDirection: isLargeScreen ? 'row' : 'column' }]}>
      <Text style={[styles.header, { width: isLargeScreen ? 'auto' : '100%', left: isLargeScreen ? 20 : 0 }]}>
        Which one?
      </Text>
      
      {/* Option 1 */}
      <TouchableOpacity 
        style={[styles.half, isLargeScreen && styles.halfLarge]} 
        onPress={() => handleChoice(left)} 
        activeOpacity={0.9}
      >
        <Animated.View key={left.id} entering={FadeIn} style={styles.inner}>
          <Image source={left.image} style={styles.img} resizeMode="cover" />
          <View style={styles.labelBox}>
            <Text style={styles.labelText}>{left.name}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>

      <View style={styles.vsBadge}><Text style={styles.vsText}>VS</Text></View>

      {/* Option 2 */}
      <TouchableOpacity 
        style={[
          styles.half, 
          isLargeScreen && styles.halfLarge,
          isLargeScreen ? { borderLeftWidth: 2, borderLeftColor: '#fff' } : { borderTopWidth: 2, borderTopColor: '#fff' }
        ]} 
        onPress={() => handleChoice(right)} 
        activeOpacity={0.9}
      >
        <Animated.View key={right.id} entering={FadeIn} style={styles.inner}>
          <Image source={right.image} style={styles.img} resizeMode="cover" />
          <View style={styles.labelBox}>
             <Text style={styles.labelText}>{right.name}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#222' },
  header: { 
    position: 'absolute', top: 60, width: '100%', textAlign: 'center', zIndex: 10, 
    color: 'white', fontWeight: 'bold', fontSize: 22, 
    textShadowColor: 'rgba(0,0,0,0.8)', textShadowOffset: {width: 1, height: 1}, textShadowRadius: 3
  },
  half: { flex: 1, position: 'relative' },
  halfLarge: { height: '100%' }, // สำหรับ Desktop ให้สูงเต็มจอ
  inner: { flex: 1 },
  img: { width: '100%', height: '100%' },
  labelBox: { 
    position: 'absolute', bottom: 30, alignSelf: 'center', 
    backgroundColor: 'rgba(255,255,255,0.9)', 
    paddingHorizontal: 25, paddingVertical: 12, borderRadius: 30,
    elevation: 5
  },
  labelText: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  vsBadge: { 
    position: 'absolute', top: '50%', left: '50%', 
    transform: [{translateX: -30}, {translateY: -30}], 
    width: 60, height: 60, borderRadius: 30, 
    backgroundColor: '#FF4757', justifyContent: 'center', alignItems: 'center', 
    zIndex: 20, borderWidth: 3, borderColor: 'white', elevation: 10 
  },
  vsText: { color: 'white', fontWeight: '900', fontSize: 18, fontStyle: 'italic' }
});