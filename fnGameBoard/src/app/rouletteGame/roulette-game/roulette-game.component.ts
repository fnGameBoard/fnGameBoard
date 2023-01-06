// import { Component, OnInit } from '@angular/core';
// // import * as $ from 'jquery';

// @Component({
//   selector: 'app-roulette-game',
//   templateUrl: './roulette-game.component.html',
//   styleUrls: ['./roulette-game.component.css']
// })
// export class RouletteGameComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {


// $(document).ready(function() {
//   let gift;
//   let present =[ 1,2,3 , 4,5,6 ]

//   iniGame = function(num){
//     gift = num;
//     TweenLite.killTweensOf($(".board_on"));
//     TweenLite.to($(".board_on"), 0, {css:{rotation:rotationPos[gift]}});
//     TweenLite.from($(".board_on"),5, {css:{rotation:-3000}, onComplete:endGame, ease:Sine.easeOut});
//                console.log("gift 숫자 : "+ (gift +1) +"rotationPos" + rotationPos );
//   }

//   var rotationPos = new Array(60,120,180,240,300,360);

//   TweenLite.to($(".board_on"), 360, {css:{rotation:-4000}, ease: Linear.easeNone});
//   function endGame(){
//               var  copImg= "http://img.babathe.com/upload/specialDisplay/htmlImage/2019/test/coupon"+( gift +1) + ".png";
//                 console.log("이미지 : " + copImg );

//                      $("#popup_gift .lottery_present" ).text(function( ) {   return "축하드립니다."+present [gift ] + " 룰렛숫장"+ ( gift +1)   + " 당첨 되셨습니다.";    });
//                           $( '<img  src="' + copImg+ '" />' ).prependTo("#popup_gift .lottery_present");
//   setTimeout(function() {openPopup("popup_gift"); }, 1000);
// }

//   $(".popup .btn").on("click",function(){
//     location.reload();
//   });
//   function openPopup(id) {
//     closePopup();
//     $('.popup').slideUp(0);
//     var popupid = id
//     $('body').append('<div id="fade"></div>');
//     $('#fade').css({
//     'filter' : 'alpha(opacity=60)'
//     }).fadeIn(300);
//     var popuptopmargin = ($('#' + popupid).height()) / 2;
//     var popupleftmargin = ($('#' + popupid).width()) / 2;
//     $('#' + popupid).css({
//       'margin-left' : -popupleftmargin
//     });
//     $('#' + popupid).slideDown(500);
//   }
//   function closePopup() {
//     $('#fade').fadeOut(300, function() {
//       // $(".player").html('');
//     });
//     $('.popup').slideUp(400);
//     return false
//   }
//   $(".close").click(closePopup);

// });



// $(function() {
//   var clicked  =0;

//   $(".join").on("mousedown",function(){
//     if( clicked <= 0){    iniGame(Math.floor(Math.random() *6));    }
//     else  if( clicked >=1 ){    event.preventDefault(); alert( "이벤트 참여 하셨습니다."); }
//     clicked ++
//   });
// }
// )


  // }  ///ngOnInit 끝 



// }









import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  HostListener
} from '@angular/core';
import {
  COLS,
  BLOCK_SIZE,
  ROWS,
  COLORS,
  LINES_PER_LEVEL,
  LEVEL,
  POINTS,
  KEY
} from './constants';
import { Piece, IPiece } from './piece.component';
import { GameService } from './game.service';
import { Conditional } from '@angular/compiler';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-roulette-game',
  templateUrl: './roulette-game.component.html',
  styleUrls: ['./roulette-game.component.css']
})
export class RouletteGameComponent implements OnInit {
  @ViewChild('board', { static: true })
  canvas: ElementRef<HTMLCanvasElement>  = {} as ElementRef;
  
  @ViewChild('next', { static: true })
  canvasNext: ElementRef<HTMLCanvasElement>  = {} as ElementRef;;
  ctx!: CanvasRenderingContext2D ;
  // ctx: CanvasRenderingContext2D | null = null;
  ctxNext!: CanvasRenderingContext2D ;
  board: number[][] = [];
  piece!: Piece;
  next!: Piece ;
  requestId: number = 0;
  time!: { 
          start: number; 
          elapsed: number; 
          level: number; 
        };
  points: number = 0;
  lines: number = 0;
  level: number = 0;
  moves = {
    [KEY.LEFT]: (p: IPiece): IPiece => ({ ...p, x: p.x - 1 }),
    [KEY.RIGHT]: (p: IPiece): IPiece => ({ ...p, x: p.x + 1 }),
    [KEY.DOWN]: (p: IPiece): IPiece => ({ ...p, y: p.y + 1 }),
    [KEY.SPACE]: (p: IPiece): IPiece => ({ ...p, y: p.y + 1 }),
    [KEY.UP]: (p: IPiece): IPiece => this.service.rotate(p)
  };

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === KEY.ESC) {
      this.gameOver();
    } 
      else if (this.moves) {
        // else if (this.moves[event.keyCode]) {
      event.preventDefault();
      // Get new state
      let p = this.moves[KEY.LEFT](this.piece);
      // let p = this.moves[event.keyCode](this.piece);
      if (event.key === KEY.SPACE) {
        // Hard drop
        while (this.service.valid(p, this.board)) {
          this.points += POINTS.HARD_DROP;
          this.piece.move(p);
          p = this.moves[KEY.DOWN](this.piece);
        }
      } else if (this.service.valid(p, this.board)) {
        this.piece.move(p);
        if (event.key === KEY.DOWN) {
          this.points += POINTS.SOFT_DROP;
        }
      }
    }
  }

  constructor(private service: GameService) {}

  ngOnInit() {
    this.initBoard();
    this.initNext();
    this.resetGame();
  }

  initBoard() {
    // this.ctx = this.canvas.nativeElement.getContext('2d');
    console.log(this.canvas.nativeElement.getContext('2d'));



    // Calculate size of canvas from constants.
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;

    // Scale so we don't need to give size on every draw.
    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
  }

  initNext() {
    // this.ctxNext = this.canvasNext.nativeElement.getContext('2d');

    // Calculate size of canvas from constants.
    this.ctxNext.canvas.width = 4 * BLOCK_SIZE;
    this.ctxNext.canvas.height = 4 * BLOCK_SIZE;

    this.ctxNext.scale(BLOCK_SIZE, BLOCK_SIZE);
  }

  play() {
    this.resetGame();
    console.log(this.ctx);;
    return 


    this.next = new Piece(this.ctx);
    this.piece = new Piece(this.ctx);
    this.next.drawNext(this.ctxNext);
    this.time.start = performance.now();

    // If we have an old game running a game then cancel the old
    if (this.requestId) {
      cancelAnimationFrame(this.requestId);
    }

    this.animate();
  }

  resetGame() {
    this.points = 0;
    this.lines = 0;
    this.level = 0;
    this.board = this.getEmptyBoard();
    // this.time = { start: 0, elapsed: 0, level: LEVEL[this.level] };
  }

  animate(now = 0) {
    this.time.elapsed = now - this.time.start;
    if (this.time.elapsed > this.time.level) {
      this.time.start = now;
      if (!this.drop()) {
        this.gameOver();
        return;
      }
    }
    this.draw();
    this.requestId = requestAnimationFrame(this.animate.bind(this));
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.piece.draw();
    this.drawBoard();
  }

  drop(): boolean {
    let p = this.moves[KEY.DOWN](this.piece);
    if (this.service.valid(p, this.board)) {
      this.piece.move(p);
    } else {
      this.freeze();
      this.clearLines();
      if (this.piece.y === 0) {
        // Game over
        return false;
      }
      this.piece = this.next;
      this.next = new Piece(this.ctx);
      this.next.drawNext(this.ctxNext);
    }
    return true;
  }

  clearLines() {
    let lines = 0;
    this.board.forEach((row, y) => {
      if (row.every(value => value !== 0)) {
        lines++;
        this.board.splice(y, 1);
        this.board.unshift(Array(COLS).fill(0));
      }
    });
    if (lines > 0) {
      this.points += this.service.getLinesClearedPoints(lines, this.level);
      this.lines += lines;
      if (this.lines >= LINES_PER_LEVEL) {
        this.level++;
        this.lines -= LINES_PER_LEVEL;
        // this.time.level = LEVEL[this.level];
      }
    }
  }

  freeze() {
    this.piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.board[y + this.piece.y][x + this.piece.x] = value;
        }
      });
    });
  }

  drawBoard() {
    this.board.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillStyle = COLORS[value];
          this.ctx.fillRect(x, y, 1, 1);
        }
      });
    });
  }

  gameOver() {
    cancelAnimationFrame(this.requestId);
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(1, 3, 8, 1.2);
    this.ctx.font = '1px Arial';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('GAME OVER', 1.8, 4);
  }

  getEmptyBoard(): number[][] {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }
}