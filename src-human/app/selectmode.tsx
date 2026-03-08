import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card } from "react-native-paper";
import { router } from "expo-router";

export default function RandomPage() {
    return ( 
    <View style={styles.background}>
        <View style={styles.container}>
        <Text style={styles.title}>กรุณาเลือกโหมดที่ต้องการ</Text>

        <Card style={styles.card} onPress={() => router.push('/random-mode')}>
            <Card.Content>
                <Text style={styles.cardTitle}>สุ่ม 🎲</Text>
                <Text>สุ่มเมนูที่อยากกิน จากหมวดอาหารที่เลือกมา 🎲</Text>
            </Card.Content>
        </Card>

        <Card style={[{marginTop: 30}, styles.card]} onPress={() => router.push('/decision-mode')}>
            <Card.Content>
                <Text style={styles.cardTitle}>โหมดตัดสินใจ 🏆</Text>
                <Text>ทำการจับคู่เมนูเพื่อทำการตัดสินใจอาหารที่อยากกิน 🤤</Text>
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
    maxWidth: 600,
    alignSelf: 'center'
  },
  title: { 
    textAlign: 'center', 
    marginBottom: 30, 
    fontWeight: 'bold',
    fontSize: 24 
},
  card: { 
    padding: 10 
},
  cardTitle: { 
    fontWeight: 'bold', 
    marginBottom: 5 }
});