import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import Animal, { NewAnimal, Species } from '../../types/Animal'


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http:HttpClient) {}
    getData () {
      return this.http.get<Animal[]>('http://localhost:3004/animals/species/all');
    }

    deleteData(id: string) {
      return this.http.delete(`http://localhost:3004/animals/${id}`)
    }

    postData(animal: NewAnimal) {
      return this.http.post<Animal>('http://localhost:3004/animals', animal)
    }

    getDataBySpecies (species: Species) {
      return this.http.get<Animal[]>(`http://localhost:3004/animals/species/${species}`)
    }
}
