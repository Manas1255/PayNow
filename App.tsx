import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import RootStackNavigator from './src/navigation/RootStack';
import {configureGoogleSignIn} from './src/navigation/config/googleSignInConfig';

function App(): React.JSX.Element {
  configureGoogleSignIn();

  return (
    <NavigationContainer>
      {/* <OnboardingNavigator /> */}
      {/* <AuthStackNavigator /> */}
      {/* <RootStackNavigator /> */}
      {/* <HomeStackNavigator /> */}
      {/* <BottomTabNavigator /> */}
      <RootStackNavigator />
    </NavigationContainer>
  );
}

export default App;
