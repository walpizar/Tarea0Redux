import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import IState from '../../models/IState'
import ListaAlbums from '../ListaAlbums/ListaAlbums'



const AlbumsContainer = () => {
    const albumSeleccionado = useSelector(
        (state: IState) => state.album.albumSeleccionado,
      );
   

    return (
        <View>
        <ListaAlbums />
        </View>
    )
}

export default AlbumsContainer
