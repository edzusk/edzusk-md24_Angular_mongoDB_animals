import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addSong, removeSong, Song } from '../store/music.actions';


type NewSong = {
  title: string,
  artist: string,
}

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.scss']
})
export class MusicPageComponent  {
  songs$: Observable<Song[]>;
  constructor(private store: Store<{songs: Song[]}>) {
    this.songs$= store.select('songs');
   }

  removeSong(song: Song) {
    console.log('removing');
    this.store.dispatch(removeSong({song}));
  }
  addSong(newSong: NewSong) {
    console.log('adding');
    const id = Date.now()
    const song = {...newSong, id}
    this.store.dispatch(addSong({song}));
  }
}
