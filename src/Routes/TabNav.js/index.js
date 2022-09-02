import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../telas/Home/index';
import MelhoresProdutores from '../../telas/MelhoresProdutores';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Melhores Produtores" component={MelhoresProdutores} />
    </Tab.Navigator>
  );
}
