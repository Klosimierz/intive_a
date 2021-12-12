import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WikiService } from 'src/app/wiki.service';

@Component({
  selector: 'app-upperbar',
  templateUrl: './upperbar.component.html',
  styleUrls: ['./upperbar.component.css']
})
export class UpperbarComponent implements OnInit {

  language:string = 'pl';
  limit:number = 20;

  @Output() resultObject = new EventEmitter();

  changeLanguage(changeTo:string):void {
    this.language = changeTo;
  }

  changeLimit(changeTo:number):void {
    this.limit = changeTo;
  }

  constructor(private searchService:WikiService) { }

  ngOnInit(): void {
  }

  appendToStorage(name:string, data:string){
    var old = localStorage.getItem(name);
    if(old === null) old = "";
    localStorage.setItem(name, old + data);
}

  onSubmit(payload:any) {

    const {search} = payload.form.value;
    this.searchService.getArticles(this.language,search,this.limit).subscribe(result => {
      this.resultObject.emit(result);
      this.appendToStorage('history',search+' n ');
      console.log(localStorage.getItem('history'));
    });
  }

}
