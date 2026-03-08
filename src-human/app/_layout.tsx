import { View, ActivityIndicator } from 'react-native';
import { MD3LightTheme as DefaultTheme, PaperProvider, configureFonts } from 'react-native-paper';
import { Slot } from 'expo-router';
import { useFonts, Kanit_400Regular, Kanit_500Medium, Kanit_700Bold } from '@expo-google-fonts/kanit';
import { AppProvider } from '../context/AppContext';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts({ config: { fontFamily: 'Kanit_400Regular' } }),
  colors: {
    ...DefaultTheme.colors,
    primary: '#35e850b7',
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
    return <View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator /></View>;
  }

  return (
    <AppProvider>
      <PaperProvider theme={theme}>
        <Slot />
      </PaperProvider>
    </AppProvider>
    );
}