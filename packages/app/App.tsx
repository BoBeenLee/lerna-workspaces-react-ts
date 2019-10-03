import React from 'react';
import {StatusBar, Text, View} from 'react-native';

import Header from '@test/shared';

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <Header />
      <Text>Hello World</Text>
    </View>
  );
};

export default App;
