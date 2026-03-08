import {useState} from "react";
import { View } from "react-native";
import { Button, Chip, Text } from "react-native-paper";
import { useApp } from "../context/AppContext";
import { router } from 'expo-router';
import { categories, foodData } from "../constants/data";

export default function Home() {
    const [Selectedcate, setSelectedcate] = useState<string[]>([]);
    const { setSelectedFood } = useApp();

    const toggleCategory = (cat: string) => {
        if (Selectedcate.includes(cat)) {
            setSelectedcate(Selectedcate.filter((c) => c !== cat));
        } else {
            setSelectedcate([...Selectedcate, cat]);
        }
    };

    const handleStart = () => {
        const filtered = foodData.filter((item) => Selectedcate.includes(item.category));
        setSelectedFood(filtered);
        router.push('/selectmode');
    }

    return (
    <View style={styles.background}>
        <View style={styles.container}>
        <Text style={styles.title}>กินไรดีน้าวันนี้</Text>
        <Text style={styles.subtitle}>โปรดเลือกประเภทอาหาร</Text>
        <View style={styles.chipContainer}>
            {categories.map((cat) => (
                <Chip
                    key={cat}
                    selected={Selectedcate.includes(cat)}
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
            disabled={Selectedcate.length === 0}
            style={styles.button}
            contentStyle={{ height: 50 }}
            >
            Next
        </Button>
        </View>
    </View>
    );
}

const styles = {
    background: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    container: { 
        flex: 1, 
        padding: 20, 
        justifyContent: 'center', 
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: 600, // ล็อกความกว้างไม่ให้เกิน 600px บน Web
        alignSelf: 'center', // จัดกึ่งกลางจอ
    },
    title: { 
        textAlign: 'center', 
        fontWeight: 'bold', 
        marginBottom: 10 
    },
    subtitle: { 
        textAlign: 'center', 
        marginBottom: 20, 
        color: '#666' 
    },
        chipContainer: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        gap: 10, 
        justifyContent: 'center', 
        marginBottom: 30 
    },
    chip: { 
        marginBottom: 5 
    },
    button: { 
        marginTop: 20, 
        borderRadius: 10,
    },
}