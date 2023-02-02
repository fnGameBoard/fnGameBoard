import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RainingWordsGameComponent } from './rainingWordsGame/raining-words-game/raining-words-game.component';
// import { BoardComponent } from './rouletteGame/roulette-game/board.component.tetris';
import { RouletteGameComponent } from './rouletteGame/roulette-game/roulette-game.component';
import { TetrisComponent } from './tetris/tetris.component';

const routes: Routes = [
  //메인
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  //룰렛
  { path: 'roulette', component: RouletteGameComponent },

    //룰렛
    { path: 'tetris', component: TetrisComponent },


  //산성비
  { path: 'rainingWords', component: RainingWordsGameComponent },
  // { path: '/play', component: RainingWordsGameComponent },
  // { path: 'query', component: QueryDataComponent },
  // { path: 'del', component: DelDataComponent },
  // { path: 'current', component: CurrentRateComponent },
  // { path: '', redirectTo: '/current', pathMatch: 'full' },

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
