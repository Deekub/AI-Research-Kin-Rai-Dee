import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { useApp } from '../context/AppContext';
import { router } from 'expo-router';
import { Asset } from 'expo-asset';
import * as Sharing from 'expo-sharing';

export default function Result() {
  const { winner, setWinner } = useApp();

  if (!winner) return null;

  const handleShare = async () => {
    try {
      const imageAsset = Asset.fromModule(winner.image);
      await imageAsset.downloadAsync();

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(imageAsset.localUri || imageAsset.uri, {
          dialogTitle: 'Let\'s eat this!',
          mimeType: 'image/jpeg',
          UTI: 'public.jpeg',
        });
      }
    } catch (e) {
      console.error("Sharing failed:", e);
    }
  };

  const handleHome = () => {
    setWinner(null);
    router.dismissAll();
    router.replace('/');
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text variant="displaySmall" style={styles.congrats}>Winner! 🎉</Text>
        
        <Card style={styles.card}>
          {/* สร้าง View ซ้อนด้านในเพื่อทำมุมโค้ง (Clipping) แทนการทำที่ Card โดยตรง */}
          <View style={styles.cardContentClipper}>
            
            <View style={styles.imageContainer}>
               <Image 
                source={winner.image} 
                style={styles.foodImage}
                resizeMode="contain"
              />
            </View>
            
            {/* ใช้ View และ Text ธรรมดาแทน Card.Title เพื่อแก้ปัญหาตัวหนังสือทับกัน */}
            <View style={styles.textContainer}>
              <Text variant="headlineMedium" style={styles.foodName}>{winner.name}</Text>
              <Text variant="bodyLarge" style={styles.subText}>Excellent Choice</Text>
            </View>

          </View>
        </Card>

        <View style={styles.actions}>
          <Button icon="share-variant" mode="contained" onPress={handleShare} style={styles.btn}>
            Share to Friends
          </Button>
          <Button mode="text" onPress={handleHome} style={styles.btn}>
            Back to Home
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: '#FFF0F5', justifyContent: 'center' },
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center',
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center'
  },
  congrats: { textAlign: 'center', marginBottom: 20, fontWeight: 'bold', color: '#FF6B6B' },
  
  card: { 
    marginBottom: 30, 
    borderRadius: 15,
    backgroundColor: 'white',
    // เอา overflow: 'hidden' ออกจากตรงนี้ เพื่อแก้ Warning เรื่อง Shadow
    elevation: 4, // เงา Android
    shadowColor: '#000', // เงา iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContentClipper: {
    // ย้าย overflow: 'hidden' มาไว้ที่นี่แทน เพื่อให้เนื้อหาข้างในโค้งตาม Card
    borderRadius: 15, 
    overflow: 'hidden',
  },
  
  imageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: '100%',
    padding: 10
  },
  foodImage: {
    width: '100%',
    height: '100%', 
  },
  
  // Style สำหรับข้อความ
  textContainer: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  foodName: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
    color: '#333'
  },
  subText: {
    textAlign: 'center',
    color: '#666'
  },
  
  actions: { gap: 10 },
  btn: { paddingVertical: 5 }
});