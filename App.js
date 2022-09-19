import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from '@expo-google-fonts/lato';
import {
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
} from '@expo-google-fonts/montserrat-alternates';
import Routes from './components/Routes';
import Navbar from './components/Navbar';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Light': Lato_300Light,
    'Lato-Regular': Lato_400Regular,
    'Lato-Bold': Lato_700Bold,
    'Lato-Black': Lato_900Black,
    'MA-Medium': MontserratAlternates_500Medium,
    'MA-Bold': MontserratAlternates_700Bold,
  });
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <StatusBar style="inverted" translucent={false} />
      <Routes />
      <Navbar />
    </NavigationContainer>
  );
}