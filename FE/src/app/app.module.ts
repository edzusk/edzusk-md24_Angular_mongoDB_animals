import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalsComponent } from './animal-page/animals/animals.component';
import { AddAnimalFormComponent } from './animal-page/add-animal-form/add-animal-form.component'
import { FormsModule } from '@angular/forms';
import { AnimalSwitchComponent } from './animal-page/animal-switch/animal-switch.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { RouterModule } from '@angular/router';
import { AnimalPageComponent } from './animal-page/animal-page.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import {musicReducer} from './store/music.reducer';
import { SongsComponent } from './music-page/songs/songs.component';
import { NewSongFormComponent } from './music-page/new-song-form/new-song-form.component';



@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AddAnimalFormComponent,
    AnimalSwitchComponent,
    MusicPageComponent,
    AnimalPageComponent,
    HomeComponent,
    SongsComponent,
    NewSongFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'music', component: MusicPageComponent},
      {path: 'animals', component: AnimalPageComponent},
      {path: '', component: HomeComponent},
    ]),
    StoreModule.forRoot({ songs: musicReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
