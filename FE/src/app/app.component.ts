import { Component } from '@angular/core';
import { AnimalService } from './services/animal.service';
import Animal, { NewAnimal, Species } from '../types/Animal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '24_md_angular_forms_and_http';
  animals: Animal[] = [];
  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.animalService.getData().subscribe((data) => {
      this.animals = data;
    });
  }
  onDelete(id: Animal['_id']) {
    this.animalService.deleteData(id).subscribe((data) => {
      this.animals = this.animals.filter((animal) => animal['_id'] !== id);
    });
  }
  onSubmit(animal: NewAnimal) {
    this.animalService.postData(animal).subscribe(({breed, species, _id}) => {
      this.animals.push({breed, species, _id});
    }); 
  }
  onSwitch(species:Species) {
    this.animalService.getDataBySpecies(species).subscribe((data) => {
      this.animals = data;
    });
  }
}
