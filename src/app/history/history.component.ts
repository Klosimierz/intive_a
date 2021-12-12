import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }
  history:string[] | undefined = [];
  ngOnInit(): void {
    console.log(localStorage.getItem('history'));
    console.log(history);
    this.history=(localStorage.getItem('history'))?.split(' n ');
    console.log(this.history);
  }
}
