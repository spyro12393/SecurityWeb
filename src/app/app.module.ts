import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { STRIDENavComponent } from './stridenav/stridenav.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultsComponent } from './results/results.component';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { CalcService } from './service/calc.service';

@NgModule({
  declarations: [
    AppComponent,
    STRIDENavComponent,
    ResultsComponent,
    MainnavbarComponent,
    ScoreBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
