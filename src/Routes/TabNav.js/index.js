import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../telas/Home/index';
import Cesta from '../../telas/Cesta';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cestas" component={Cesta} />
    </Tab.Navigator>
  );
}
