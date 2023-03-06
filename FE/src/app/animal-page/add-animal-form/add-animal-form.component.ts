import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewAnimal, Animal} from 'src/types/Animal';



@Component({
  selector: 'app-add-animal-form',
  templateUrl: './add-animal-form.component.html',
  styleUrls: ['./add-animal-form.component.scss']
})
export class AddAnimalFormComponent {
  @Output() submitEvent = new EventEmitter<NewAnimal>();

    handleEvent(form: NgForm) {
    this.submitEvent.emit(form.form.value);
    form.resetForm();
  }
}
