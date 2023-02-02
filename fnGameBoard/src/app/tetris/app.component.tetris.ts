// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <game-board></game-board>
//   `,
// })
// export class AppComponent {
//   title = 'ng-tetris';
// }








import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { COLS, BLOCK_SIZE, ROWS } from './constants';

@Component({
  selector: 'game-board',

  // templateUrl: 'board.component.html'
  templateUrl: 'board.component.tetris.html'

  
})
export class BoardComponent implements OnInit {
  // Get reference to the canvas.
  @ViewChild('board', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  ctx: CanvasRenderingContext2D;
  points: number;
  lines: number;
  level: number;

  ngOnInit() {
    this.initBoard();
  }

  initBoard() {
    // Get the 2D context that we draw on.
    this.ctx = this.canvas.nativeElement.getContext('2d');

    // Calculate size of canvas from constants.
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
  }

  play() {}
}