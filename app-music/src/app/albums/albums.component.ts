import { Component, Input, OnInit } from '@angular/core';
import { Album, List } from 'src/album';
// import { ALBUMS, ALBUM_LISTS } from '../../mock-albums';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  
})


export class AlbumsComponent implements OnInit {
  titlePage: string = "Page princiaple Albums Music";
   albums !: Album[];
  selectedAlbum!: Album;
   album_list !: List; 
   EventId !: string;
   
 


  constructor(
    private AlbumService : AlbumService
  ){};

  ngOnInit(): void {
    // this.albums = this.AlbumService.getalbums();
    this.albums = this.AlbumService
                            .order(function(a:Album, b:Album){
                              return a.duration - b.duration
                            }) // ordonne les albums
                            .limit(0, this.AlbumService.count()) // renvoie une sous partie
                            .getalbums()// recupère les albums
    console.log(this.albums);
    
  };

 onSelected(album:Album){
    this.selectedAlbum = album;
    console.log(this.selectedAlbum);
    
  };

  playParent($event:Album){
    console.log('play');
    this.EventId = $event.id;
    
  }



}
