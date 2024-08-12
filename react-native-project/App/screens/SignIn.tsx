import React from 'react';
import { Button, Alert } from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SignUp: undefined;
};

type DrawerParamList = {
  Home: undefined;
};

type Props = {
  navigation: CompositeNavigationProp<
    DrawerNavigationProp<DrawerParamList>,
    StackNavigationProp<RootStackParamList>
  >;
};
const Component: React.FC<Props> =  ({ navigation }) => (
  <>
    <Button title="Sign In" onPress={() => Alert.alert("todo!")} />
    <Button title="Sign Up" onPress={() => navigation.push("SignUp")} />
  </>
)

export default Component;