import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {
  collection,
  FirebaseFirestoreTypes,
  getDocs,
  getFirestore,
} from '@react-native-firebase/firestore';
import {dummyProfilePic, RequestIcon, SendIcon} from '../assets';
import {ContactStackParams} from '../ContactStack';
import {color} from '../utils/theme';

type ContactScreenProps = NativeStackScreenProps<
  ContactStackParams,
  'ContactScreen'
>;

const ContactScreen: FC<ContactScreenProps> = () => {
  const [contacts, setContacts] = useState<
    FirebaseFirestoreTypes.DocumentData[]
  >([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const db = getFirestore();
        const snapshot = await getDocs(collection(db, 'users'));

        const users = snapshot.docs.map(doc => doc.data());

        if (users) {
          setContacts(users);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchContacts();
  }, []);

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

      {contacts.map(contact => (
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
              <Text>{contact.name}</Text>
              <Text>{contact.email}</Text>
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
              }}>
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
