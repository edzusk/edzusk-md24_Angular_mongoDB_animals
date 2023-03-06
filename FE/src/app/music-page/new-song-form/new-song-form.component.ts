import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Song } from 'src/app/store/music.actions';

@Component({
  selector: 'app-new-song-form',
  templateUrl: './new-song-form.component.html',
  styleUrls: ['./new-song-form.component.scss']
})
export class NewSongFormComponent {
  @Output() submitEvent = new EventEmitter<Song>();

    handleEvent(form: NgForm) {
    this.submitEvent.emit(form.form.value);
    form.resetForm();
  }
}
