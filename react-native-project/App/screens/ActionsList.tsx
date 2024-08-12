import { DrawerNavigationProp } from '@react-navigation/drawer';
import React from 'react';
import {View, Button} from 'react-native';
import {Alert} from 'react-native';

type Props = {
  navigation: DrawerNavigationProp<any, any>;
};

export default ( ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Button title="Open Modal" onPress={() => navigation.navigate("Modal")} />
      <Button title="Open Alert" onPress={() => navigation.navigate("Alert")} />
    </View>
  );
}) as React.FC<Props>;
