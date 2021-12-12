import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WikiService } from 'src/app/wiki.service';

@Component({
  selector: 'app-resultfield',
  templateUrl: './resultfield.component.html',
  styleUrls: ['./resultfield.component.css']
})
export class ResultfieldComponent implements OnInit {

  constructor(private route: ActivatedRoute,private articleRetrieval: WikiService) { }

  url:string = 'https://pl.wikipedia.org/';

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.articleRetrieval.getPage(params['lang'],params['title']).subscribe((Response: { html_url:string })=>{
        console.log(this.url);
        this.url = Response.html_url;
        console.log(this.url);
      });
      
    })
  }

}
