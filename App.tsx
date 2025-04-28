import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {Provider} from 'react-redux';
import RootStackNavigator from './src/navigation/RootStack';
import {configureGoogleSignIn} from './src/navigation/config/googleSignInConfig';
import {store} from './src/store';

function App(): React.JSX.Element {
  configureGoogleSignIn();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
