import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNav from './TabNav.js';
import StackNav from './StackNav/index.js';

export default function Routs() {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
}
