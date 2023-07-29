import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Album, List } from 'src/album';
import { AlbumService } from '../album.service';
import { AlbumsComponent } from '../albums/albums.component';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})

export class AlbumDetailsComponent implements OnInit, OnChanges {
  @Input() album !:Album;
  @Output() onPlay: EventEmitter<Album> = new EventEmitter() ;
  // @Output() onPlay: EventEmitter<Album> = new EventEmitter();


  selectedList !: Array<string> | undefined;

  constructor(
    private AlbumService: AlbumService
  ){}

  ngOnInit(): void {
    
  };

  ngOnChanges(): void {
    // debugger
    if (this.album) {
      this.selectedList = this.AlbumService.getalbumlist(this.album.id)?.list

      // this.albumlist = this.AlbumService.getalbumlist(this.album.id)?.list
      console.log(this.selectedList); 
    }
   
  }
  

  play(album: Album){
     this.onPlay.emit(album)
  }



}
