import {getAuth} from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTab';

export type RootStackParams = {
  AuthStackNavigator: undefined;
  BottomTabNavigator: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParams>();

const RootStackNavigator = () => {
  const isUserAuthenticated = getAuth();

  console.log('auth ', isUserAuthenticated);
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {/* <RootStack.Screen
        name="AuthStackNavigator"
        component={AuthStackNavigator}
      /> */}
      <RootStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
