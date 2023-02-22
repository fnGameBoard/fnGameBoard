import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let audio = new Audio();
    audio.src = "../../assets/audio/waltz-game-theme.wav";
    // ('../../assets/waltz-game-theme.wav');
    audio.load();
    audio.play();
  }

}
