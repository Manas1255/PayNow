import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthStackParams} from '../AuthStack';
import {color, textSize} from '../utils/theme';

import {paynowLogo} from '../assets';

type LoginSignupScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'LoginSignupScreen'
>;

const LoginSignupScreen: FC<LoginSignupScreenProps> = ({navigation}) => {
  const {createAccountButton} = styles;

  const onLoginPress = () => {
    navigation.navigate('LoginScreen');
  };

  const onCreateAccountPress = () => {
    navigation.navigate('SignupScreen');
  };
  return (
    <>
      <View
        style={{
          flex: 0.7,
          backgroundColor: color.blue,
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={paynowLogo} />
        <Text style={{color: color.white}}>
          The best way to transfer money safely
        </Text>
      </View>

      <View style={{flex: 0.3}}>
        <TouchableOpacity
          style={createAccountButton}
          onPress={onCreateAccountPress}>
          <Text style={{color: color.white}}>Create new Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignSelf: 'center'}} onPress={onLoginPress}>
          <Text style={{color: color.blue, fontSize: textSize.medium}}>
            Already have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  createAccountButton: {
    width: '80%',
    backgroundColor: color.blue,
    alignSelf: 'center',
    height: 50,
    borderRadius: 15,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginSignupScreen;
