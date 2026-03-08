import { View, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';
import { router } from 'expo-router';
import React from 'react';

export default function ModeSelect() {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text variant="headlineSmall" style={styles.title}>Choose Mode</Text>
        
        <Card style={styles.card} onPress={() => router.push('/food-random')}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.cardTitle}>🎲 Random</Text>
            <Text variant="bodyMedium">Quick spin, shake to re-roll.</Text>
          </Card.Content>
        </Card>

        <Card style={[styles.card, { marginTop: 20 }]} onPress={() => router.push('/food-decision')}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.cardTitle}>⚔️ Tournament</Text>
            <Text variant="bodyMedium">1 vs 1 Battle to find the best.</Text>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: '#F5F5F5', justifyContent: 'center' },
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center', 
    width: '100%',
    maxWidth: 600, // Web Responsive
    alignSelf: 'center'
  },
  title: { textAlign: 'center', marginBottom: 30, fontWeight: 'bold' },
  card: { padding: 10 },
  cardTitle: { fontWeight: 'bold', marginBottom: 5 }
});