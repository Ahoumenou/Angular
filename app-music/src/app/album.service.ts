import { Injectable } from '@angular/core';
import { Album, List,SortAlbumCallback  } from 'src/album';
import { ALBUMS, ALBUM_LISTS } from 'src/mock-albums';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
 private _albums : Album[] = ALBUMS;
 private _albums_lists : List[] = ALBUM_LISTS;

  constructor() { };

  getalbums(): Album[] {
    return this._albums;
    console.log(this._albums);
    
  };

  getalbum(Id : string | null):  Album | undefined{
   return this._albums.find( album => album.id === Id)
  }

  getlists(): List[] | AlbumService  {
    return this._albums_lists
  };

  getalbumlist( id:string ): List | undefined{
    return this._albums_lists.find(List => List.id === id)
  };

  count(): number{
    return this._albums.length
  };

  limit(start: number, end:number): AlbumService{
      this._albums.slice(start , end)
      return this
  }

  order(callback: SortAlbumCallback ) {
    this._albums.sort(callback)
    return this; // retourne le service pour permettre le chaînage de methode 
  }

  
}
