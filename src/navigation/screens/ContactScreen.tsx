import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {fetchContacts} from '../../store/contactsSlice';
import {dummyProfilePic, RequestIcon, SendIcon} from '../assets';
import {ContactStackParams} from '../ContactStack';
import {color} from '../utils/theme';

type ContactScreenProps = NativeStackScreenProps<
  ContactStackParams,
  'ContactScreen'
>;

const ContactScreen: FC<ContactScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {users, loading, error} = useSelector(
    (state: RootState) => state.contacts,
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading)
    return <ActivityIndicator size="large" style={{marginTop: 50}} />;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 32,
        }}>
        <Text>Contacts</Text>
      </View>

      <View
        style={{
          backgroundColor: color.grey,
          height: 1,
          width: '100%',
          marginTop: 16,
        }}
      />

      {users?.map((user, index) => (
        <View
          key={index}
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
              <Text>{user.name}</Text>
              <Text>{user.email}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{
                backgroundColor: color.yellow,
                height: 40,
                width: 40,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('SendMoneyScreen')}>
              <SendIcon />
            </TouchableOpacity>

            <View style={{width: '2%'}} />

            <TouchableOpacity
              style={{
                backgroundColor: color.blue,
                height: 40,
                width: 40,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <RequestIcon />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ContactScreen;
