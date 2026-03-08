import React, { useState } from 'react';
import { View, StyleSheet, Platform, ScrollView } from 'react-native';
import { Text, Chip, Button } from 'react-native-paper';
import { router } from 'expo-router';
import { CATEGORIES, FOOD_DATA } from '../constants/data';
import { useApp } from '../context/AppContext';

export default function Home() {
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const { setSelectedFood } = useApp();

  const toggleCategory = (cat: string) => {
    if (selectedCats.includes(cat)) {
      setSelectedCats(selectedCats.filter((c) => c !== cat));
    } else {
      setSelectedCats([...selectedCats, cat]);
    }
  };

  const handleStart = () => {
    const filtered = FOOD_DATA.filter((item) => selectedCats.includes(item.category));
    setSelectedFood(filtered);
    router.push('/mode-select');
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>What to eat today?</Text>
        <Text variant="bodyLarge" style={styles.subtitle}>Select categories</Text>

        <View style={styles.chipContainer}>
          {CATEGORIES.map((cat) => (
            <Chip
              key={cat}
              selected={selectedCats.includes(cat)}
              onPress={() => toggleCategory(cat)}
              style={styles.chip}
              showSelectedOverlay
            >
              {cat}
            </Chip>
          ))}
        </View>

        <Button 
          mode="contained" 
          onPress={handleStart} 
          disabled={selectedCats.length === 0}
          style={styles.button}
          contentStyle={{ height: 50 }}
        >
          Next
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // เพิ่ม Background เต็มจอ
  background: { flex: 1, backgroundColor: '#fff', justifyContent: 'center' },
  // Container ตรงกลางที่รองรับ Responsive
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center', 
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 600, // ล็อกความกว้างไม่ให้เกิน 600px บน Web
    alignSelf: 'center', // จัดกึ่งกลางจอ
  },
  title: { textAlign: 'center', fontWeight: 'bold', marginBottom: 10 },
  subtitle: { textAlign: 'center', marginBottom: 20, color: '#666' },
  chipContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 30 },
  chip: { marginBottom: 5 },
  button: { marginTop: 20, borderRadius: 10 },
});