import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import LoginSignupScreen from './screens/LoginSignupScreen';
import SignupScreen from './screens/SignupScreen';

export type AuthStackParams = {
  LoginSignupScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name="LoginSignupScreen"
        component={LoginSignupScreen}
      />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
