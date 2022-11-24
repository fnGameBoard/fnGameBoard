import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raining-words-game',
  templateUrl: './raining-words-game.component.html',
  styleUrls: ['./raining-words-game.component.css']
})
export class RainingWordsGameComponent implements OnInit {
public ds:KeyWord = new KeyWord();
public aa:string ="";
public word:any[]=["컴퓨터", "낙타", "알파카"];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => { // 화면이 열리는 시간이 있으므로 setTimeout 으로 300ms 이 후에 실행하도록 한다.
    // this.getRandomInt(4);
    console.log(this.getRandomInt(3));
    // expected output: 0, 1 or 2
    let idx = this.getRandomInt(3);
    // aa = this.word[idx];
    
    console.log(this.getRandomInt(10));
    // expected output: 0
    
    console.log(Math.random());
    // expected output: a number from 0 to <1
    }, 300);


  /** setInterval을 이용하지 않고 아래와 같이 중첩 setTimeout을 사용함
  let timerId = setInterval(() => alert('째깍'), 2000);
  */

  let timerId = setTimeout(function tick() {
    alert('째깍');
    timerId = setTimeout(tick, 2000); // (*)
  }, 2000);

  }

  getRandomInt(max:any) {
    return Math.floor(Math.random() * max);
  }


}

//점수
//단어
export class KeyWord {
  word1:string = "";
  speed:number = 0;
}