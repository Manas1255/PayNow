import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactScreen from './screens/ContactScreen';

export type ContactStackParams = {
  ContactScreen: undefined;
};

const ContactStack = createNativeStackNavigator<ContactStackParams>();

const ContactStackNavigator = () => {
  return (
    <ContactStack.Navigator screenOptions={{headerShown: false}}>
      <ContactStack.Screen name="ContactScreen" component={ContactScreen} />
    </ContactStack.Navigator>
  );
};

export default ContactStackNavigator;
