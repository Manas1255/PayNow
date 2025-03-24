import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';

export type OnboardingStackParams = {
  OnboardingScreen: undefined;
};

const OnboardingStack = createNativeStackNavigator<OnboardingStackParams>();

const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator screenOptions={{headerShown: false}}>
      <OnboardingStack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
