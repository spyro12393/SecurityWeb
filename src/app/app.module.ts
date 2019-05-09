import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { STRIDENavComponent } from './stridenav/stridenav.component';
import { FinalResultComponent } from './final-result/final-result.component';

@NgModule({
  declarations: [
    AppComponent,
    STRIDENavComponent,
    FinalResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
