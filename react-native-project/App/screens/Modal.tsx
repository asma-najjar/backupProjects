import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Alert} from 'react-native';

export default () => (
  <View
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{backgroundColor: 'white', padding: 20}}
      onPress={() => Alert.alert('todo!')}>
      <Text>Modal me</Text>
    </TouchableOpacity>
  </View>
);
