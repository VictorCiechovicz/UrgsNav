import React from 'react';
import {useRoute} from '@react-navigation/native';
import {FlatList, Image, View, Text} from 'react-native';
import estilos from './estilos';
import Cesta from './componentes/Cesta';
import Topo from '../../componentes/Topo';
import useTextos from '../../hooks/useTextos';

import topo from '../../assets/produtores/topo.png';

export default function Produtor() {
  const route = useRoute();
  const {tituloProdutor, tituloCestas} = useTextos();
  const {nome, imagem, cestas} = route.params;

  const TopoLista = () => {
    return (
      <>
        <Topo titulo={tituloProdutor} imagem={topo} altura={150} />
        <View style={estilos.conteudo}>
          <View style={estilos.logo}>
            <Image source={imagem} style={estilos.produtorImage} />
            <Text style={estilos.produtor}>{nome}</Text>
          </View>

          <Text style={estilos.cestas}>{tituloCestas}</Text>
        </View>
      </>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={TopoLista}
      data={cestas}
      renderItem={({item}) => <Cesta {...item} produtor={{nome, imagem}} />}
      style={estilos.lista}
    />
  );
}
