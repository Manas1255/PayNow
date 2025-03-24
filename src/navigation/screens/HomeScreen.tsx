import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStackParams} from '../HomeStack';
import {dummyProfilePic, NotificationsIcon} from '../assets';
import {color} from '../utils/theme';

type HomeScreenProps = NativeStackScreenProps<HomeStackParams, 'HomeScreen'>;

const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          flex: 0.4,
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
          }}>
          <Text>$1234</Text>
          <NotificationsIcon />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
