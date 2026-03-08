import { Slot } from 'expo-router';
import { MD3LightTheme as DefaultTheme, PaperProvider, configureFonts } from 'react-native-paper';
import { useFonts, Kanit_400Regular, Kanit_500Medium, Kanit_700Bold } from '@expo-google-fonts/kanit';
import { AppProvider } from '../context/AppContext';
import { View, ActivityIndicator } from 'react-native';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts({config: { fontFamily: 'Kanit_400Regular' }}), // Apply Kanit globally
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
  },
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_500Medium,
    Kanit_700Bold,
  });

  if (!fontsLoaded) {
    return <View style={{flex:1, justifyContent:'center'}}><ActivityIndicator /></View>;
  }

  return (
    <AppProvider>
      <PaperProvider theme={theme}>
        <Slot />
      </PaperProvider>
    </AppProvider>
  );
}