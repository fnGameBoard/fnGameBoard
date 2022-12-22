import { Component, OnInit } from '@angular/core';
import { timer , Subscription, Observable } from 'rxjs';
import { GameService } from '../game.service';
import { Word } from '../word';
import { select } from '@ngrx/store';
import { WordComponent } from '../word/word.component';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  public palySpeed: number | undefined;
  public wordsSubscription: Subscription | undefined;
  public speedSubscription: Subscription | undefined;
  public gameOverSubscription: Subscription | undefined;
  public timeSubscription: Subscription | undefined;



  constructor(private gameService: GameService, words: WordComponent) { }

  ngOnInit(): void {

    // this.gameService.initPlay();
    // this.speedSubscription = this.playSpeed$.subscribe(speed => this.palySpeed = speed);

    // const newWordTime = timer(this.palySpeed, this.palySpeed);
    // this.wordsSubscription = newWordTime.subscribe(() => this.gameService.getWords());

    // const playTime = timer(1000, 1000);
    // this.timeSubscription = playTime.subscribe(() => this.gameService.handleTimeCount());

    // this.gameOverSubscription = this.gameOver$.subscribe(gameover => {
    //   if(gameover) { 
    //     this.wordsSubscription.unsubscribe();
    //     this.timeSubscription.unsubscribe();
    //   }
    // })
  }

  // ngOnDestroy() {
  //   this.wordsSubscription.unsubscribe();
  //   this.speedSubscription.unsubscribe();
  //   this.gameOverSubscription.unsubscribe();
  //   this.timeSubscription.unsubscribe();
  // }

}
