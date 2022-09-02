import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackNav from '../StackNav';
import MelhoresProdutoresRotas from '../MelhoresProdutoresRotas';

import Coracao from '../../assets/coracao.svg';
import Home from '../../assets/home.svg';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2a9f85',
        tabBarInactiveTintColor: '#c7c7c7',
        tabBarIcon: ({color}) => {
          let Icon = Home;

          if (route.name === 'Melhores Produtores') {
            Icon = Coracao;
          }
          return <Icon color={color} />;
        },
      })}>
      <Tab.Screen name="HomeScreen" component={StackNav} />
      <Tab.Screen
        name="Melhores Produtores"
        component={MelhoresProdutoresRotas}
      />
    </Tab.Navigator>
  );
}
