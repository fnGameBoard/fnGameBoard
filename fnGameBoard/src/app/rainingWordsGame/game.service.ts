import { Injectable } from '@angular/core';
import { GET_WORDS } from './action';
import { Word } from './word';
import { WORDS } from './word-list';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  ngRedux: any;

  constructor() { }


  getWords(): void{
    const index = Math.floor((Math.random()*WORDS.length));
    const word: Word = JSON.parse(JSON.stringify(WORDS[index]));
    word.left =   Math.floor((Math.random()*650));
    this.ngRedux.dispatch({type: GET_WORDS, word: word});
  }
}
