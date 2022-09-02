import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackNav from '../StackNav';
import MelhoresProdutoresRotas from '../MelhoresProdutoresRotas';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={StackNav} />
      <Tab.Screen
        name="Melhores Produtores"
        component={MelhoresProdutoresRotas}
      />
    </Tab.Navigator>
  );
}
