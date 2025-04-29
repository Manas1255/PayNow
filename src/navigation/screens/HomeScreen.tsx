import {getAuth, signOut} from '@react-native-firebase/auth';
import {getFirestore} from '@react-native-firebase/firestore';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStackParams} from '../HomeStack';
import {
  dummyProfilePic,
  NotificationsIcon,
  RequestIcon,
  SendIcon,
} from '../assets';
import {color} from '../utils/theme';
import {UserProfile} from '../utils/types';

type HomeScreenProps = NativeStackScreenProps<HomeStackParams, 'HomeScreen'>;

const HomeScreen: FC<HomeScreenProps> = () => {
  const [userData, setUserData] = useState<UserProfile>();

  const fetchCurrentUser = async () => {
    const currentUser = getAuth().currentUser;

    if (currentUser) {
      const userDoc = await getFirestore()
        .collection('users')
        .doc(currentUser.uid)
        .get();

      const userProfile = userDoc.data();
      setUserData(userProfile);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(getAuth());
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          backgroundColor: '#3491DB',
          padding: 24,
        }}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{fontSize: 24, color: color.white}}>Dashboard</Text>
          <Image source={dummyProfilePic} />
        </View>

        <View style={{marginTop: 32}}>
          <Text style={{color: color.white}}>Hi, {userData?.name}!</Text>
          <Text style={{color: color.white, marginTop: 16, fontSize: 24}}>
            Total Balance
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 24,
            alignItems: 'center',
          }}>
          <Text style={{color: color.white, fontSize: 32, fontWeight: 'bold'}}>
            ${userData?.balance}
          </Text>
          <NotificationsIcon />
        </View>
      </View>

      <View
        style={{
          marginTop: 32,
          paddingHorizontal: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: color.yellow,
            width: '47%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            flexDirection: 'row',
          }}>
          <SendIcon />
          <View style={{marginLeft: 4}}>
            <Text style={{color: color.white}}>Send Money</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: color.blue,
            width: '47%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            flexDirection: 'row',
          }}
          onPress={handleLogout}>
          <RequestIcon />
          <View style={{marginLeft: 4}}>
            <Text style={{color: color.white}}>Request Money</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          marginTop: 32,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          Last Transactions
        </Text>
        <Text style={{color: color.blue, fontSize: 16}}>View All</Text>
      </View>

      <View
        style={{
          paddingHorizontal: 16,
          marginTop: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image source={dummyProfilePic} />
          <View style={{marginLeft: 4}}>
            <Text>Yara Khalil</Text>
            <Text>May 4, 10:00 AM</Text>
          </View>
        </View>

        <View>
          <Text style={{fontWeight: 'bold'}}>-$15.00</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
