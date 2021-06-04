import IAction from "../../../models/IAction";
import IAlbum from "../../../models/IAlbum";
import { ACTUALIZAR_TODOS, ACTUALIZAR_TODO_SELECCIONADO } from "../../actions/ActionsTypes";

export interface AlbumReducer {
    album: IAlbum[] ;
    albumSeleccionado: IAlbum | null;
  }
  
  const initialState: AlbumReducer = {
    album: [],
    albumSeleccionado: null,
  };

  export default (
    state = initialState,
    {type, payload}: IAction,
  ): AlbumReducer =>{
    console.log(state);
    switch (type) {
        case ACTUALIZAR_TODOS:
          return {...state, album: payload as IAlbum[]};
    
        case ACTUALIZAR_TODO_SELECCIONADO:
          return {...state, albumSeleccionado: payload as IAlbum};
    
        default:
          return state;
      }

  }
  