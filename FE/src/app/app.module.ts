import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalsComponent } from './animals/animals.component';
import { AddAnimalFormComponent } from './add-animal-form/add-animal-form.component'
import { FormsModule } from '@angular/forms';
import { AnimalSwitchComponent } from './animal-switch/animal-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AddAnimalFormComponent,
    AnimalSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
