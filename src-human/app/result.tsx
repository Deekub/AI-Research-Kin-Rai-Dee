import { useEffect, useState} from "react";
import { View, Image, StyleSheet, useWindowDimensions } from "react-native";
import { Text, Card, Button } from "react-native-paper";
import { useApp } from "../context/AppContext";
import { router } from "expo-router";
import { Asset } from "expo-asset";
import * as Sharing from "expo-sharing";


export default function ResultsPage() {
    const { winner, setWinner } = useApp();
    const [conText, setconText] = useState("");

        // ตรวจสอบขนาดหน้าจอ
        const { width } = useWindowDimensions();
        const isLargeScreen = width > 700;

    const handleHome = () => {
        setWinner(null);
        setconText("");
        router.dismissAll();
        router.replace('/');
    };

    const handleShare = async () => {
    try {
      const AssetImg = Asset.fromModule(winner.image);
      await AssetImg.downloadAsync();

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(AssetImg.localUri || AssetImg.uri, {
          dialogTitle: 'Let\'s eat this!',
          mimeType: 'image/jpeg',
          UTI: 'public.jpeg',
        });
      }
    } catch (e) {
      console.error("Sharing failed:", e);
    }
  };
  
  useEffect(() => {
    congratText();
  }, []);

  if (!winner) return null;


  const congratText = () => {
    const phrases = [
      { id : 1, text: "สุดยอด! เลือกเมนูนี้เลยนะ" },
      { id : 2, text: "เยี่ยมไปเลย! เลือกมาได้เยี่ยมมาก" },
      { id : 3, text: "อร่อยแน่! ลองทานดูเล้ยยย" },
    ]
    const randIndex = Math.floor(Math.random() * phrases.length);
    setconText(phrases[randIndex].text);
  } 

    console.log("Result Loaded",winner);
    return (
    <View style={styles.background}>
        <View style={styles.container}>
            <Text style={styles.Texttitle}>เมนูที่คุณเลือกมาคือ</Text>
                <Card style={styles.card}>
                        <View style={styles.cardContentClipper}>
                            <View style={styles.imageContainer}>
                                <Image source={winner.image} style={styles.foodImage} resizeMode="contain"/>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.foodName}>{winner.name}</Text>
                                <Text style={styles.foodName}>{conText}</Text>
                            </View>
                        </View>
                </Card>
            <View style={{alignItems: 'center'}}>
                <Button style={[styles.btn,{marginTop: 20, width: isLargeScreen ? '50%' : '100%',backgroundColor :"#76c0f2eb"}]} icon="share-variant" mode="contained" onPress={handleShare}>แชร์เมนูอร่อยๆกับเพื่อน</Button>
                <Button style={[styles.btn,{marginTop: 20, width: isLargeScreen ? '40%' : '100%',backgroundColor :"#6fee63f1"}]} icon="home" mode="contained"onPress={handleHome}>กลับหน้าแรก</Button>
            </View>
        </View>
    </View>);
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
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContentClipper: {
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
  textContainer: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
    color: '#333'
  },
  Texttitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FF6B6B'
  },
  
  btn: { paddingVertical: 5 }
});