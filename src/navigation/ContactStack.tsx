import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactScreen from './screens/ContactScreen';
import SendMoneyScreen from './screens/SendMoneyScreen';

export type ContactStackParams = {
  ContactScreen: undefined;
  SendMoneyScreen: {userID: string | undefined};
};

const ContactStack = createNativeStackNavigator<ContactStackParams>();

const ContactStackNavigator = () => {
  return (
    <ContactStack.Navigator screenOptions={{headerShown: false}}>
      <ContactStack.Screen name="ContactScreen" component={ContactScreen} />
      <ContactStack.Screen name="SendMoneyScreen" component={SendMoneyScreen} />
    </ContactStack.Navigator>
  );
};

export default ContactStackNavigator;
