import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

export type HomeStackParams = {
  HomeScreen: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
