import { createAction, props } from '@ngrx/store';
 export type Song = {
  id: number,
  title: string,
  artist: string,
}
export const addSong = createAction('[Music Component] Adder', props<{song:Song}>());
export const removeSong = createAction('[Music Component] Remover', props<{song:Song}>());


