import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main//main.component';
import { RainingWordsGameComponent } from './rainingWordsGame/raining-words-game/raining-words-game.component';
import { RouletteGameComponent } from './rouletteGame/roulette-game/roulette-game.component';
import { WordComponent } from './rainingWordsGame/word/word.component';
import { PlayComponent } from './rainingWordsGame/play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RainingWordsGameComponent,
    RouletteGameComponent,
    WordComponent,
    PlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
