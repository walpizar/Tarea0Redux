import IPhotos from "./IPhotos";
import IUser from "./IUser";

export default interface IAlbum{
    id: number;
    userId: number;
    title: string;
    photos?: IPhotos[];
    user?: IUser[]
}