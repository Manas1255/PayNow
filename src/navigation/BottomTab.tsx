import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FC} from 'react';
import {HomeIcon} from './assets';
import ContactStackNavigator from './ContactStack';
import HomeStackNavigator from './HomeStack';

export type BottomTabParams = {
  HomeStack: undefined;
  ContactStack: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParams>();

const BottomTabNavigator: FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused, color}) => {
            return <HomeIcon fill={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="ContactStack"
        component={ContactStackNavigator}
        // options={{
        //   tabBarIcon: ({focused, color}) => {
        //     return <HomeIcon fill={color} />;
        //   },
        // }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
