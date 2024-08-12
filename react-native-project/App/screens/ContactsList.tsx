import React from 'react';
import {FlatList} from 'react-native';
import {Alert} from 'react-native';

import {Row, Separator} from '../components/Row';

export default () => (
  <FlatList
    data={null}
    keyExtractor={item => {
      return `${item.id.value}-${item.phone}`;
    }}
    renderItem={({item}) => {
      const name = `${item.name.first} ${item.name.last}`;

      return (
        <Row
          image={{uri: item.picture.thumbnail}}
          title={name}
          subtitle={item.email}
          onPress={() => Alert.alert('todo!')}
        />
      );
    }}
    ItemSeparatorComponent={Separator}
    ListHeaderComponent={() => <Separator />}
    ListFooterComponent={() => <Separator />}
    // eslint-disable-next-line react-native/no-inline-styles
    contentContainerStyle={{paddingVertical: 20}}
  />
);
