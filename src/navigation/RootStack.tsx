import {getAuth, onAuthStateChanged, User} from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import AuthStackNavigator from './AuthStack';
import BottomTabNavigator from './BottomTab';

export type RootStackParams = {
  AuthStackNavigator: undefined;
  BottomTabNavigator: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootStackNavigator = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, authenticatedUser => {
      setUser(authenticatedUser);
      setLoading(false);
    });

    return unsubscribe; // Cleanup listener on unmount
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <RootStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      ) : (
        <RootStack.Screen
          name="AuthStackNavigator"
          component={AuthStackNavigator}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
