import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FC} from 'react';
import HomeStackNavigator from './HomeStack';

export type BottomTabParams = {
  HomeStack: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParams>();

const BottomTabNavigator: FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="HomeStack" component={HomeStackNavigator} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
