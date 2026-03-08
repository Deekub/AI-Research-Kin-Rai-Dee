import { ImageSourcePropType } from 'react-native';

export interface FoodItem {
  id: string;
  name: string;
  category: string;
  image: ImageSourcePropType; // เปลี่ยนจาก string เป็น type ของรูปภาพ
}

export const CATEGORIES = ['เส้น', 'ข้าว', 'แกง', 'ต้ม/ซุป', 'สุขภาพ/ยำ', 'ฟาสต์ฟู้ด'];

export const FOOD_DATA: FoodItem[] = [
  // --- หมวดเส้น (Noodles) ---
  { id: '1', name: 'ผัดไทย', category: 'เส้น', image: require('../assets/food/PadThai.jpg') },
  { id: '2', name: 'ก๋วยเตี๋ยวเรือ', category: 'เส้น', image: require('../assets/food/BoatNoodles.jpg') },
  { id: '3', name: 'ผัดซีอิ๊ว', category: 'เส้น', image: require('../assets/food/PadSeeEw.jpg') },
  { id: '4', name: 'ราดหน้า', category: 'เส้น', image: require('../assets/food/RadNa.jpg') },
  { id: '5', name: 'เย็นตาโฟ', category: 'เส้น', image: require('../assets/food/YenTaFo.jpg') },

  // --- หมวดข้าว (Rice) ---
  { id: '6', name: 'กะเพราหมูสับ+ไข่ดาว', category: 'ข้าว', image: require('../assets/food/Kraprao.jpg') },
  { id: '7', name: 'ข้าวมันไก่', category: 'ข้าว', image: require('../assets/food/ChickenRice.jpg') },
  { id: '8', name: 'ข้าวผัด', category: 'ข้าว', image: require('../assets/food/FriedRice.jpg') },
  { id: '9', name: 'ข้าวไข่เจียว', category: 'ข้าว', image: require('../assets/food/OmeletRice.jpg') },
  { id: '10', name: 'ข้าวขาหมู', category: 'ข้าว', image: require('../assets/food/StewedPorkLeg.jpg') },

  // --- หมวดแกง (Curry) ---
  { id: '11', name: 'แกงเขียวหวาน', category: 'แกง', image: require('../assets/food/GreenCurry.jpg') },
  { id: '12', name: 'พะแนงหมู', category: 'แกง', image: require('../assets/food/Panang.jpg') },
  { id: '13', name: 'แกงส้มชะอมกุ้ง', category: 'แกง', image: require('../assets/food/SourCurry.jpg') },
  { id: '14', name: 'มัสมั่นไก่', category: 'แกง', image: require('../assets/food/Massaman.jpg') },
  { id: '15', name: 'ซุปเห็ด', category: 'แกง', image: require('../assets/food/MushroomSoup.jpg') }, // แทนที่แกงเผ็ดเป็ดย่างด้วยรูปที่มีอยู่

  // --- หมวดต้ม/ซุป (Soup) ---
  { id: '16', name: 'ต้มยำกุ้ง', category: 'ต้ม/ซุป', image: require('../assets/food/TomYum.jpg') },
  { id: '17', name: 'ต้มข่าไก่', category: 'ต้ม/ซุป', image: require('../assets/food/TomKha.jpg') },
  { id: '18', name: 'แกงจืดเต้าหู้หมูสับ', category: 'ต้ม/ซุป', image: require('../assets/food/ClearSoup.jpg') },
  { id: '19', name: 'ต้มเล้งแซ่บ', category: 'ต้ม/ซุป', image: require('../assets/food/SpicyPorkBone.jpg') },
  { id: '20', name: 'ต้มแซ่บกระดูกอ่อน', category: 'ต้ม/ซุป', image: require('../assets/food/TomSaap.jpg') },

  // --- หมวดสุขภาพ/ยำ (Healthy/Salad) ---
  { id: '21', name: 'ส้มตำไทย', category: 'สุขภาพ/ยำ', image: require('../assets/food/SomTum.jpg') },
  { id: '22', name: 'สุกี้น้ำ', category: 'สุขภาพ/ยำ', image: require('../assets/food/SukiNam.jpg') },
  { id: '23', name: 'ยำวุ้นเส้น', category: 'สุขภาพ/ยำ', image: require('../assets/food/SpicySalad.jpg') },
  { id: '24', name: 'สลัดโรล', category: 'สุขภาพ/ยำ', image: require('../assets/food/SaladRoll.jpg') },
  { id: '25', name: 'ปลาเผา/นึ่งมะนาว', category: 'สุขภาพ/ยำ', image: require('../assets/food/SteamedFish.jpg') },

  // --- หมวดฟาสต์ฟู้ด (Fast Food) ---
  { id: '26', name: 'ไก่ทอด', category: 'ฟาสต์ฟู้ด', image: require('../assets/food/FriedChicken.jpg') },
  { id: '27', name: 'พิซซ่า', category: 'ฟาสต์ฟู้ด', image: require('../assets/food/Pizza.jpg') },
  { id: '28', name: 'เบอร์เกอร์', category: 'ฟาสต์ฟู้ด', image: require('../assets/food/Burger.jpg') },
  { id: '29', name: 'สปาเก็ตตี้', category: 'ฟาสต์ฟู้ด', image: require('../assets/food/Spaghetti.jpg') },
  { id: '30', name: 'เฟรนช์ฟรายส์/นักเก็ต', category: 'ฟาสต์ฟู้ด', image: require('../assets/food/Snack.jpg') },
];