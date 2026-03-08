import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions } from "react-native";
import {useApp} from "../context/AppContext";
import { router } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";

export default function DecisionPage() {
    const { selectedFood, setWinner } = useApp();
    const [candidates, setCandidates] = useState(selectedFood);
    const [roundWinners, setRoundWinners] = useState<any[]>([]);
    const [pIndex, setPairIndex] = useState(0);

    // ตรวจสอบขนาดหน้าจอ
    const { width } = useWindowDimensions();
    const isLargeScreen = width > 700;

    // กันเผื่อช้อยมีตัวเดียว
    useEffect(() => {
        if (candidates.length == 1) {
            setWinner(candidates[0]);
            router.replace('/result');
        }
    }, [candidates]);

    const Left = candidates[pIndex];
    const Right = candidates[pIndex + 1];

    console.log("Left:", Left);
    console.log("Right:", Right);

    const handleChoiceSelected = (winnerItem: any) => {
        const currentRdWinners = [...roundWinners, winnerItem];
        const nextPIndex = pIndex + 2;    

        if (nextPIndex >= candidates.length - 1) {
            let Winner = currentRdWinners;
            if (candidates.length % 2 !== 0) {
                Winner.push(candidates[candidates.length - 1]);
            }
            setCandidates(Winner);
            setRoundWinners([]);
            setPairIndex(0);
        }
        else {
            setRoundWinners(currentRdWinners);
            setPairIndex(nextPIndex);
        }
    };

    if (!Left || !Right) return <View><Text>Loading...</Text></View>;
    return (
    <View style={[styles.container, { flexDirection: isLargeScreen ? 'row' : 'column' }]}>
        <Text style={[styles.header, { width: isLargeScreen ? 'auto' : '100%', left: isLargeScreen ? '42%' : 0, top: isLargeScreen ? '5%': '1%' }]}>เลือกทานอะไรดีคะ</Text>
        <TouchableOpacity
            style={[ styles.half, styles.halfLarge,{marginTop: isLargeScreen ?  30: 0}]}
            onPress={() => handleChoiceSelected(Left)}
            activeOpacity={0.9}
            >
            <Animated.View style={[styles.inner]} entering={FadeIn.duration(500)}>
                <Image source={Left.image} resizeMode="cover" style={styles.img}/>
                <View style={styles.labelBox}>
                    <Text style={styles.labelText}>{Left.name}</Text>
                </View>
            </Animated.View>
        </TouchableOpacity>
        <View style={styles.vsBadge}><Text style={styles.vsText}>VS</Text></View>
        <TouchableOpacity
        style={[
          styles.half, 
          isLargeScreen && styles.halfLarge,
          isLargeScreen ? { borderLeftWidth: 2, borderLeftColor: '#ffffffff'} : { borderTopWidth: 2, borderTopColor: '#fff' },{marginTop: isLargeScreen ?  80: 0}
        ]}
            onPress={() => handleChoiceSelected(Left)}
            activeOpacity={0.9}
            >
            <Animated.View style={styles.inner} entering={FadeIn.duration(500)}>
                <Image source={Right.image} style={styles.img} resizeMode="cover"/>
                <View style={styles.labelBox}>
                    <Text style={styles.labelText}>{Right.name}</Text>
                </View>
            </Animated.View>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#222' 
},
  header: { 
    position: 'absolute', 
    width: '100%', 
    textAlign: 'center', 
    zIndex: 10, 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 22, 
    textShadowColor: 'rgba(0,0,0,0.8)', 
    textShadowOffset: {width: 1, height: 1}, 
    textShadowRadius: 3
  },
  half: { 
    flex: 1, 
    position: 'relative' 
},
  halfLarge: 
  { 
    height: '100%' 
  },
  inner: { flex: 1 },
  img: { 
    width: '80%', 
    height: '80%',
    marginHorizontal: '10%',
    marginVertical: '10%',
    borderRadius: 20,
},
  labelBox: { 
    position: 'absolute', 
    bottom: 30, 
    alignSelf: 'center', 
    backgroundColor: 'rgba(255,255,255,0.9)', 
    paddingHorizontal: 25, 
    paddingVertical: 12, 
    borderRadius: 30,
    elevation: 5
  },
  labelText: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#333' 
},
  vsBadge: { 
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: [{translateX: -30}, {translateY: -30}], 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    backgroundColor: '#FF4757', 
    justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: 20, 
    borderWidth: 3, 
    borderColor: 'white', 
    elevation: 10 
  },
  vsText: { 
    color: 'white', 
    fontWeight: '900', 
    fontSize: 18, 
    fontStyle: 'italic' }
});