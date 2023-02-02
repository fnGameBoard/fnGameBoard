import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Word } from '../word';
import { WORDS } from "../word-list";
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'app-raining-words-game',
  templateUrl: './raining-words-game.component.html',
  styleUrls: ['./raining-words-game.component.css']
})

export class RainingWordsGameComponent implements OnInit {
  //뷰차일드
  
  //변수선언
  public num :any | undefined;
  public mapArr:any = [];
  public ab: string | undefined;
  public score: string = "SCORE : ";
  public life: string = "LIFE : ❤️❤️❤️❤️❤️";
  public time: string = "TIME : ";
  public timeNum: number = 0;
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
    ngAfterViewChecked(): void {
    }
    timer(timeNum:number):void{
      let startDate1: Date = new Date();       ///꼭 Date형식으로 변환 후 사용합니다. 
      let endDate1: Date = new Date();           ///꼭 Date형식으로 변환 후 사용합니다. 
      let diff = endDate1.getTime() - startDate1.getTime();
      // this.time2 = ;

      var hour, min, sec;

      var timer = setInterval(() =>{
          timeNum++; // 1초마다 증가, 타이머의 경우 time--;
  
          min = Math.floor(timeNum/60);
          hour = Math.floor(min/60);
          sec = timeNum%60;
          min = min%60;
  
          let th = hour.toString();
          let tm = min.toString();
          let ts = sec.toString();
          
          // 한자리일 경우 처리
          if(hour < 10){
              th = "0" + hour;
          }
          if(min < 10){
              tm = "0" + min;
          }
          if(sec < 10){
              ts = "0" + sec;
          }
  
          // 함수 호출 당시 받은 object의 html 교체
          this.time = "TIME : " + th + ":" + tm + ":" + ts;
      }
  , 1000);


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
    console.log(this.num);
    //시간
    let startDate1: Date = new Date();       ///꼭 Date형식으로 변환 후 사용합니다. 
    this.timer(this.timeNum);

    let count = 1;
    const timeoutId = setInterval(() => {
      let idx : number = Number((Math.random()*9).toFixed());
      this.ab = WORDS[idx].text;
      let endDate1: Date = new Date();           ///꼭 Date형식으로 변환 후 사용합니다. 
      let diff = endDate1.getTime() - startDate1.getTime();
      // this.time = this.getDisplayTime(diff).toString();
      

      let oneLine:any = [10];
      let mapIdx : number = Number((Math.random() * 9).toFixed());
      oneLine[mapIdx] = WORDS[idx].text;
      console.log(count); // 1 2 3 4 5
      this.mapArr.push(oneLine);
      
        if (count++ === 5) clearInterval(timeoutId);
      }, 1000);

      console.log("timeoutId: ", timeoutId);
  }
}
