import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Produtor from '../../telas/Produtor';
import Home from '../../telas/Produtores/index';
import Cesta from '../../telas/Produtor/componentes/Cesta';

const Stack = createNativeStackNavigator();

export default function StackNav({ComponentePrincipal = Home}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={ComponentePrincipal} />
      <Stack.Screen name="Produtor" component={Produtor} />
      <Stack.Screen name="Cesta" component={Cesta} />
    </Stack.Navigator>
  );
}
