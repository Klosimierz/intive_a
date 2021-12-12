import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperbarComponent } from './upperbar/upperbar/upperbar.component';
import { ResultfieldComponent } from './resultfield/resultfield/resultfield.component';
import { LowerbarComponent } from './lowerbar/lowerbar/lowerbar.component';
import { FormsModule } from '@angular/forms';
import { ArticlecardComponent } from './articlecard/articlecard/articlecard.component';
import { HistoryComponent } from './history/history.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UpperbarComponent,
    ResultfieldComponent,
    LowerbarComponent,
    ArticlecardComponent,
    HistoryComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
