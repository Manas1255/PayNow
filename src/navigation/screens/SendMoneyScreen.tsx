import {getAuth} from '@react-native-firebase/auth';
import {getFirestore} from '@react-native-firebase/firestore';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useEffect, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {BackIcon, dummyProfilePic, SendIcon} from '../assets';
import {ContactStackParams} from '../ContactStack';
import {color} from '../utils/theme';
import {UserProfile} from '../utils/types';

type SendMoneyScreenProps = NativeStackScreenProps<
  ContactStackParams,
  'SendMoneyScreen'
>;

const SendMoneyScreen: FC<SendMoneyScreenProps> = ({navigation, route}) => {
  const {userID: uid} = route.params;
  console.log('User id ', uid);

  const [sendAmount, setSendAmount] = useState('');
  const [userData, setUserData] = useState<UserProfile>();
  const [currentUserId, setCurrentUserId] = useState('');
  const [receiverUser, setReceiverUser] = useState<UserProfile>();
  const [receiverId, setReceiverId] = useState(uid.id);

  const fetchCurrentUser = async () => {
    const currentUser = getAuth().currentUser;

    if (currentUser) {
      setCurrentUserId(currentUser.uid);
      const userDoc = await getFirestore()
        .collection('users')
        .doc(currentUser.uid)
        .get();

      const userProfile = userDoc.data();
      setUserData(userProfile);
    }
  };

  const fetchReceiverUser = async () => {
    const receieverData = await getFirestore()
      .collection('users')
      .doc(uid.id)
      .get();

    const receieverProfile = receieverData.data();
    setReceiverUser(receieverProfile);
  };

  useEffect(() => {
    fetchCurrentUser();
    fetchReceiverUser();
  }, []);

  const handleSendMoney = async () => {
    if (!sendAmount) {
      console.log('No amount entered');
    }

    const amount = parseFloat(sendAmount);

    // Deduct money from sender
    const newBalance = userData?.balance - amount;
    console.log('new balance ', newBalance);

    try {
      await getFirestore()
        .collection('users')
        .doc(currentUserId)
        .update({balance: newBalance});
    } catch (error) {
      console.error('Error updating balance:', error);
    }

    // Add money to the reciever
    try {
      await getFirestore()
        .collection('users')
        .doc(receiverId)
        .update({balance: receiverUser?.balance + amount});
    } catch (error) {
      console.error('Error transferring money:', error);
    }
    setSendAmount('');
  };

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
          }}
          onPress={handleSendMoney}>
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
