import React from 'react';
import {useRoute} from '@react-navigation/native';
import {FlatList, Text} from 'react-native';
import estilos from './estilos';
import Cesta from './componentes/Cesta';

export default function Produtor() {
  const route = useRoute();
  const {nome, imagem, cestas} = route.params;

  return (
    <FlatList
      data={cestas}
      renderItem={({item}) => <Cesta {...item} produtor={{nome, imagem}} />}
      style={estilos.lista}
    />
  );
}
