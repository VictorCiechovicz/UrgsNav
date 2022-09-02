import React from 'react';
import {SafeAreaView} from 'react-native';
import useProdutores from './src/hooks/useProdutores';
import {NavigationContainer} from '@react-navigation/native';

import Routs from './src/Routes';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routs />
    </SafeAreaView>
  );
}
