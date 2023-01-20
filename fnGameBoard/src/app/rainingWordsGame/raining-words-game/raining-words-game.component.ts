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
  //뷰차일드
  
  //변수선언
  public mapArr:any = [];
  public ab: string | undefined;
  public score: string = "SCORE : ";
  public life: string = "LIFE : ";
  public time: string = "TIME : ";
  public DOWNTIME = 2000;
  //생성자
  constructor() {}

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

    ngAfterViewInit():void {
    
    }

    getDisplayTime(time: number): string {
      const second:number = time % 60;
      const minute:number = Math.floor(time / 60);
      const sec: string = String(second).length === 2 ? String(second) : "0" + second;
      const min: string = String(minute).length === 2 ? String(minute) : "0" + minute;
      const displayTime: string = `${min}:${sec}`;
      return displayTime;
    }

  onClickStartBtn() {
    console.log("시작");
    console.log(this.mapArr);
    let idx : number = Number((Math.random()*9).toFixed());
    console.log(WORDS[idx].text);
    // console.log('째깍');
    this.ab = WORDS[idx].text;
    
    console.log(Math.random());
    
    
    
    
    let count = 1;
    const timeoutId = setInterval(() => {
      
      let oneLine:any = [10];
      let mapIdx : number = Number((Math.random()*9).toFixed());
      oneLine[mapIdx] = WORDS[idx].text;
      console.log(count); // 1 2 3 4 5
      this.mapArr.push(oneLine);
      
        if (count++ === 5) clearInterval(timeoutId);
      }, 1000);
      
      console.log("timeoutId: ", timeoutId);
}
}
