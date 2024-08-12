// ContactDetails.tsx
import React from 'react';
import {Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

type RootStackParamList = {
  ContactDetails: {contact: Contact};
};

interface Contact {
  id: {value: string};
  name: {first: string; last: string};
  phone: string;
  email: string;
  picture: {thumbnail: string};
}

type Props = StackScreenProps<RootStackParamList, 'ContactDetails'>;

const ContactDetails: React.FC<Props> = ({route}) => {
  const contactInfo = route.params.contact;

  return <Text>{JSON.stringify(contactInfo, null, 2)}</Text>;
};

export default ContactDetails;
