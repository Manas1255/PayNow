import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthStackParams} from '../AuthStack';
import {color, textSize} from '../utils/theme';

import {getAuth} from '@react-native-firebase/auth';
import {signInWithGoogle} from '../services/authService';

type SignupScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'SignupScreen'
>;

const SignupScreen: FC<SignupScreenProps> = ({navigation}) => {
  const {createAccountButton} = styles;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSignupWithGooglePress = async () => {
    try {
      await signInWithGoogle();
      console.log('Google Sign-In Success');
      // No navigation needed, RootStackNavigator will handle it
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  const onLoginPress = () => {
    navigation.navigate('LoginScreen');
  };

  const onSignupPress = async () => {
    try {
      await getAuth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Success', 'User registered successfully!');
    } catch (error) {
      Alert.alert('Error', 'Error while registering user');
    }
  };
  return (
    <SafeAreaView style={{flex: 1, padding: 32}}>
      <View>
        <Text style={{fontSize: textSize.h1, textAlign: 'center'}}>
          Signup and start transferring
        </Text>
      </View>

      <View style={{marginTop: 32}}>
        <Text>Email</Text>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          style={{
            height: 48,
            borderWidth: 0.3,
            borderColor: 'grey',
            borderRadius: 8,
            padding: 10,
            marginTop: 8,
          }}
        />
      </View>

      <View style={{marginTop: 32}}>
        <Text>Password</Text>
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          style={{
            height: 48,
            borderWidth: 0.3,
            borderColor: 'grey',
            borderRadius: 8,
            padding: 10,
            marginTop: 8,
          }}
          secureTextEntry={true}
        />
      </View>

      {/* <View style={{marginTop: 32}}>
        <Text>Confirm Password</Text>
        <TextInput
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={{
            height: 48,
            borderWidth: 0.3,
            borderColor: 'grey',
            borderRadius: 8,
            padding: 10,
            marginTop: 8,
          }}
        />
      </View> */}

      <View style={{flex: 0.3}}>
        <TouchableOpacity style={createAccountButton} onPress={onSignupPress}>
          <Text style={{color: color.white}}>Create new Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{alignSelf: 'center', marginTop: 24}}
          onPress={onLoginPress}>
          <Text style={{color: color.blue, fontSize: textSize.medium}}>
            Already have an account?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={onSignupWithGooglePress}>
          <Text style={{color: color.blue, fontSize: textSize.medium}}>
            Sign up with google
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  createAccountButton: {
    width: '100%',
    backgroundColor: color.blue,
    alignSelf: 'center',
    height: 50,
    borderRadius: 15,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignupScreen;
