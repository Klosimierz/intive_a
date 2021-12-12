import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { ResultfieldComponent } from './resultfield/resultfield/resultfield.component';

const routes: Routes = [
  {path: 'history',component: HistoryComponent},
  {path: 'article/:title/:lang',component: ResultfieldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
