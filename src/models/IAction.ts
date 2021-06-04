import IAlbum from "./IAlbum";

export default interface IAction {
  type: string;
  payload: IAlbum[] | IAlbum;
}