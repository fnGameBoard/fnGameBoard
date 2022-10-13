import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RainingWordsGameComponent } from './rainingWordsGame/raining-words-game/raining-words-game.component';

const routes: Routes = [

  { path: 'main', component: MainComponent },
  { path: 'rainingWords', component: RainingWordsGameComponent },
  { path: '', redirectTo: '/current', pathMatch: 'full' },
  // { path: 'addData', component: AddDataComponent },
  // { path: 'query', component: QueryDataComponent },
  // { path: 'del', component: DelDataComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
