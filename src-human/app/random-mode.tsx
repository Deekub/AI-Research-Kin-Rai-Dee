import { useState , useEffect, use} from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Platform } from "react-native";
import { useApp } from "../context/AppContext";
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";
import { router } from 'expo-router';
import { Accelerometer } from 'expo-sensors';

export default function RandomPage() {
    const {selectedFood, setWinner} = useApp();
    const [Currentmeal, setCurrentmeal] = useState(selectedFood[0]);
    console.log("Selected Food:", selectedFood);

    const scale = useSharedValue(1);
    const AnimatedStyle = useAnimatedStyle(() => ({transform: [{ scale: scale.value }] }));

    const randomizeMeal = () => {
        scale.value = 0.8;
        scale.value = withSpring(1);
        const randomIndex = Math.floor(Math.random() * selectedFood.length);
        setCurrentmeal(selectedFood[randomIndex]);
    };

    useEffect(() => {
        let shakemode : any = null;
        const shakeshake = async () => {
            if (Platform.OS === 'web') return;
            const isAvilable = await Accelerometer.isAvailableAsync();
            if (isAvilable) {
                Accelerometer.setUpdateInterval(100);
                shakemode = Accelerometer.addListener(({ x, y, z }) => {
                    const totalForce = Math.abs(x) + Math.abs(y) + Math.abs(z);
                if (totalForce > 1.78) randomizeMeal();
                });
            }
        };
        shakeshake();
        return () => {if (shakemode) shakemode.remove();}
    }, []);


    const handleSelect = () => {
        setWinner(Currentmeal);
        router.push('/result');
    };

    return (
    <View style={styles.background}>
        <View style={styles.container}>
            {Platform.OS !== 'web' && (<Text style={styles.hint}>เขย่าเพื่อสุ่มเมนูใหม่</Text>)}
            <Text style={{fontSize:24, fontWeight:'bold', textAlign:'center', marginBottom:20}}>เมนูนี้น่าสนใจมั้ยน้าาา</Text>
        
        <Animated.View style={[styles.card, AnimatedStyle]}>
            <Image 
                source={Currentmeal.image}
                style={styles.image}
                resizeMode="cover"
            /> 
        <View style={styles.textContainer}>
            <Text style={styles.foodName}>{Currentmeal.name}</Text>
            <Text style={styles.foodCategory}>{Currentmeal.category+"สุดแสนอร่อย"}</Text>
        </View>
        </Animated.View>
        <TouchableOpacity
            style={[styles.btn, styles.btnOutline]}
            onPress={randomizeMeal}
        >
            <Text style={styles.btnTextOutline}>สุ่มอีกครั้ง</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.btn, styles.btnFill]}
            onPress={handleSelect}
        >
            <Text style={styles.btnTextFill}>เลือกเมนูนี้</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
  background: { 
    flex: 1, 
    backgroundColor: '#f5f5f5', 
    justifyContent: 'center' 
},
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center', 
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center'
  },
  hint: { 
    textAlign: 'center', 
    marginBottom: 20, 
    color: '#888', 
    fontSize: 16 
},
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
  image: { 
    width: '100%', 
    height: 300 
}, // เพิ่มความสูงรูปนิดนึงสำหรับ Web
  textContainer: { 
    padding: 20, 
    alignItems: 'center' 
},
  foodName: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 5 
},
  foodCategory: { 
    fontSize: 16, 
    color: '#666' 
},
  btn: { 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginVertical: 5 
},
  btnOutline: { 
    borderWidth: 2, 
    borderColor: '#6b8effff', 
    backgroundColor: 'transparent' 
},
  btnFill: { 
    backgroundColor: '#4ff05abf' 
},
  btnTextOutline: { 
    color: '#6b8effff', 
    fontWeight: 'bold', 
    fontSize: 16 
},
  btnTextFill: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16 
},
});