import { createReducer, on } from '@ngrx/store';
import { addSong, removeSong } from './music.actions';


type Song = {
  id: number,
  title: string,
  artist: string,
}

export const initialState:Song[] = [
  {id:0,
  title: 'Eye of the Tiger',
  artist: 'Survivor'},
  {id:1,
  title: 'The Lion Sleeps Tonight',
  artist: 'Tokens'},
  {id:2,
  title: 'Barracuda',
  artist: 'Heart'},
  {id:3,
  title: 'Dog days are over',
  artist: 'Florence + The Machine'},
];


export const musicReducer = createReducer(
  initialState,
  on(addSong, (state, {song}) => [...state, song]),
  on(removeSong, (state, {song}) => state.filter(s => s.id!== song.id)),
)
