import { Component, EventEmitter, Output } from '@angular/core';
import { Species } from 'src/types/Animal';


const toggleRadio = (state: string): Species => {
  if (state === 'all') {
    return 'dog';
  }
  if (state === 'dog') {
    return 'cat';
  }
  return 'all';
}

@Component({
  selector: 'app-animal-switch',
  templateUrl: './animal-switch.component.html',
  styleUrls: ['./animal-switch.component.scss']
})
export class AnimalSwitchComponent {
  radioPostition: Species = 'all'
  @Output() switchEvent = new EventEmitter<Species>();

  handleEvent() {
    this.radioPostition = toggleRadio(this.radioPostition)
    this.switchEvent.emit(this.radioPostition);
  }
}
