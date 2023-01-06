import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Word } from '../word';
import { WORDS } from "../word-list";
// import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'app-raining-words-game',
  templateUrl: './raining-words-game.component.html',
  styleUrls: ['./raining-words-game.component.css']
})


export class RainingWordsGameComponent implements OnInit {

  public ab: string | undefined;
  public score: string = "점수 : ";
  public life: string = "life : ";
  // public word: any[] = ["fifa", "maple", "lol", "battleground", "철권", "던전앤파이터", "카트라이더", "포켓몬스터", "디지몬", "짱구",
  // "도라에몽", "아따맘마", "SuddenAttack", "검은사막", "Tera", "원피스", "나루토", "마비노기", "로스트아크", "블리치"
  // ];

constructor() { }

ngOnInit(): void {

    // taja배열의 index 값에 대한 변수
    var idx = 0;

    // 랜덤으로 배열을 섞어주기 위한 for문
    var randomPick = 0;
    var temp = null;

    // for (let i = 0; i < this.word.length; i++) {
    //   randomPick = Math.round(Math.random() * (this.word.length - 1));
    //   temp = this.word[randomPick];
    //   this.word[randomPick] = this.word[i];
    //   this.word[i] = temp;
    // }
  

  }


  onClickStartBtn() {
    // console.log("테스트");
    
    setTimeout(() => { // 화면이 열리는 시간이 있으므로 setTimeout 으로 300ms 이 후에 실행하도록 한다.
      // this.getRandomInt(4);
      // console.log(this.getRandomInt(3));
      // expected output: 0, 1 or 2
      // let idx = this.getRandomInt(3);
      // aa = this.word[idx];

      // expected output: 0
      
      console.log(Math.random());
      
      // expected output: a number from 0 to <1
    }, 300);
    const DOWNTIME = 2000;
    
    // let idx = this.getRandomInt(10);
    // let timerId = setTimeout(function tick(this: any) {
      /** setInterval을 이용하지 않고 아래와 같이 중첩 setTimeout을 사용함
       let timerId = setInterval(() => alert('째깍'), 2000);
       */
        let idx : number = Number((Math.random()*9+1).toFixed());
        console.log(idx);
        console.log(WORDS[idx].text);
        // console.log('째깍');
        this.ab = WORDS[idx].text;


        // timerId = setTimeout(tick, DOWNTIME); // (*)
      // }, DOWNTIME);

  
  }

  getRandomInt(max: any) {
    return Math.floor(Math.random() * max);
  }
}
