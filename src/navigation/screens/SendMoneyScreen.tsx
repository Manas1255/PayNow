import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {BackIcon, dummyProfilePic, SendIcon} from '../assets';
import {ContactStackParams} from '../ContactStack';
import {color} from '../utils/theme';

type SendMoneyScreenProps = NativeStackScreenProps<
  ContactStackParams,
  'SendMoneyScreen'
>;

const SendMoneyScreen: FC<SendMoneyScreenProps> = ({navigation}) => {
  const [sendAmount, setSendAmount] = useState('');
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 32,
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>

        <Text>Send Money</Text>
      </View>

      <View
        style={{
          backgroundColor: color.grey,
          height: 1,
          width: '100%',
          marginTop: 16,
        }}
      />

      <View style={{padding: 24}}>
        <View style={{flexDirection: 'row'}}>
          <Image source={dummyProfilePic} />
          <View style={{marginLeft: 4}}>
            <Text>Anas</Text>
            <Text>anas1255.ma@gmail.com</Text>
          </View>
        </View>

        <View style={{marginTop: 16}}>
          <Text>Payment Amount</Text>
          <TextInput
            style={{
              borderWidth: 1,
            }}
            value={sendAmount}
            onChangeText={setSendAmount}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: color.yellow,
            width: '100%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            flexDirection: 'row',
            marginTop: 8,
          }}>
          <SendIcon />
          <View style={{marginLeft: 4}}>
            <Text style={{color: color.white}}>Send Money</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SendMoneyScreen;
