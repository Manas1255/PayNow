import {getAuth} from '@react-native-firebase/auth';
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

type LoginScreenProps = NativeStackScreenProps<AuthStackParams, 'LoginScreen'>;
const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loginButton} = styles;

  const onCreateAccountPress = () => {
    navigation.navigate('SignupScreen');
  };

  const onLoginPress = async () => {
    try {
      await getAuth().signInWithEmailAndPassword(email, password);
      Alert.alert('Success', 'User loggedin successfully!');
    } catch (error) {
      Alert.alert('Error', 'Error while logging in user');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, padding: 32}}>
      <View>
        <Text style={{fontSize: textSize.h1, textAlign: 'center'}}>
          Login and start transferring
        </Text>
      </View>

      <View style={{marginTop: 32}}>
        <Text>Email</Text>
        <TextInput
          placeholder="Enter your email"
          style={{
            height: 48,
            borderWidth: 0.3,
            borderColor: 'grey',
            borderRadius: 8,
            padding: 10,
            marginTop: 8,
          }}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={{marginTop: 32}}>
        <Text>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={{
            height: 48,
            borderWidth: 0.3,
            borderColor: 'grey',
            borderRadius: 8,
            padding: 10,
            marginTop: 8,
          }}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={{flex: 0.3}}>
        <TouchableOpacity style={loginButton} onPress={onLoginPress}>
          <Text style={{color: color.white}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={onCreateAccountPress}>
          <Text style={{color: color.blue, fontSize: textSize.medium}}>
            Create new account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginButton: {
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

export default LoginScreen;
