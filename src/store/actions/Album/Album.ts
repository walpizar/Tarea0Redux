import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import IAction from "../../../models/IAction";
import IAlbum from "../../../models/IAlbum";
import IPhotos from "../../../models/IPhotos";
import IState from "../../../models/IState";
import IUser from "../../../models/IUser";
import { ACTUALIZAR_TODOS, ACTUALIZAR_TODO_SELECCIONADO } from "../ActionsTypes";

export const actualizarTodos = (payload: IAlbum[]) => ({
    type: ACTUALIZAR_TODOS,
    payload,
  });
  
  export const actualizarTodoSeleccionado = (payload: IAlbum | null) => ({
    type: ACTUALIZAR_TODO_SELECCIONADO,
    payload,
  });
  export const cargarLista =
  () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
    try {


      const dataAlbums = await fetch(
        'https://jsonplaceholder.typicode.com/albums',
      );
      const dataAlbumsJSON = (await dataAlbums.json()) as IAlbum[];

      const dataPhotos = await fetch(
        'https://jsonplaceholder.typicode.com/photos',
      );

      const dataUsers = await fetch(
        ' https://jsonplaceholder.typicode.com/users',
      );

      console.log(dataAlbums);
      
      const dataUsersJSON = (await dataUsers.json()) as IUser[];

      const dataPhotosJSON = (await dataPhotos.json()) as IPhotos[];
   
      const albumsFormateado = dataAlbumsJSON.map((album: IAlbum) => {
        return {
          ...album,
          photos: dataPhotosJSON.filter((photo: IPhotos) => {
            return album.id === photo.albumId;
            
          } ,
          
          )         

        };
      });
      const albumCompleted = albumsFormateado.map((album: IAlbum) => {
        return {
          ...album,
          user: dataUsersJSON.filter((user: IUser) => {
            return album.userId === user.id;            
          } ,          
          )       

        };
      });


      console.log(albumCompleted);

      dispatch(actualizarTodos(albumCompleted));
      
    } catch (error) {
      console.error(error);
    }
  };
  