import { Component, EventEmitter, Input, Output} from '@angular/core';
import Animal from 'src/types/Animal';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent  {
  @Input()
  animals: Animal[] = [];
  @Output() deleteEvent = new EventEmitter<Animal['_id']>();

  handleEvent(id: Animal['_id']) {
    this.deleteEvent.emit(id);
  }
}
