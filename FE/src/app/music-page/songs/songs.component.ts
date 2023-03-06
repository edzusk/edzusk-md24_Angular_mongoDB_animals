import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from 'src/app/store/music.actions';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})

export class SongsComponent {
  @Input()
  songs: Observable<Song[]> | undefined;
  @Output() deleteSong = new EventEmitter<Song>();

  handleEvent(song: Song) {
    console.log(song);
    this.deleteSong.emit(song);
  }
}
