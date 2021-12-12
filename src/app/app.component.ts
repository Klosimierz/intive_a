import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intive-wiki';

  articleList: any = [];
  location: string = '';

  constructor(private router:Router) {
    this.location = router.url;
    console.log(this.location);
  }

  onReceivingResultObject(payload:any) {
    this.articleList = payload.pages;
    console.log(this.articleList);
  }
}
