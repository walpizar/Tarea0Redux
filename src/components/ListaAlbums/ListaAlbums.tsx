import React, { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import IState from '../../models/IState';
import { cargarLista } from '../../store/actions/Album/Album';
import ItemAlbum from '../ItemAlbum/ItemAlbum';

const ListaAlbums = () => {

  const albums = useSelector((state: IState) => state.album.album);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(cargarLista());
      }, [dispatch]);
      return (
        <FlatList data={albums} renderItem={({item}) => <ItemAlbum album={item} />} />
      );
};

export default ListaAlbums
