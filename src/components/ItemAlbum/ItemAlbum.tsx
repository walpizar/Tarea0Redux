import styled from '@emotion/native';
import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import IAlbum from '../../models/IAlbum'
import { actualizarTodoSeleccionado } from '../../store/actions/Album/Album';

interface ItemAlbumProps {
    album: IAlbum;

}

const ItemAlbum: React.FC<ItemAlbumProps> = ({album}) => {
    const dispatch = useDispatch();
    const handlePress = () => {
        dispatch(actualizarTodoSeleccionado(album));
      };
      return (
        <Contenedor onPress={handlePress}>
          <Text>{album.id}</Text>
        </Contenedor>
      );
}
const Contenedor = styled.TouchableOpacity`
  padding: 12px 10px;
`;
export default ItemAlbum
