import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BetScreen from './pages/BetScreen';
import HomeScreen from './pages/HomeScreen';

const Stack = createNativeStackNavigator();
function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BetScreen" component={BetScreen} />
    </Stack.Navigator>
  );
}

export default Routes;
