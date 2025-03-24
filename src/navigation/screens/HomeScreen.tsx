import {getAuth, signOut} from '@react-native-firebase/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStackParams} from '../HomeStack';
import {dummyProfilePic, NotificationsIcon} from '../assets';
import {color} from '../utils/theme';

type HomeScreenProps = NativeStackScreenProps<HomeStackParams, 'HomeScreen'>;

const HomeScreen: FC<HomeScreenProps> = () => {
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
          flex: 0.3,
          backgroundColor: '#3491DB',
          padding: 24,
        }}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{fontSize: 24, color: color.white}}>Dashboard</Text>
          <Image source={dummyProfilePic} />
        </View>

        <View style={{marginTop: 32}}>
          <Text style={{color: color.white}}>Hi, Anas!</Text>
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
            $123.4
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
          }}>
          <Text style={{color: color.white}}>Send Money</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: color.blue,
            width: '47%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}
          onPress={handleLogout}>
          <Text style={{color: color.white}}>Request Money</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 8,
          marginTop: 32,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          Last Transactions
        </Text>
        <Text style={{color: color.blue, fontSize: 16}}>View All</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
