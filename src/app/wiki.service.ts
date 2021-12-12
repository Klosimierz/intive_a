import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) { }

  getArticles(language:string,query:string,limiter:number){
    return this.http.get('https://'+language+'.wikipedia.org/w/rest.php/v1/search/page?q='+query+'&limit='+limiter);
  }
  getPage(language:string,title:string):any{
    return this.http.get('https://'+language+'.wikipedia.org/w/rest.php/v1/page/'+title+'/bare');
  }

}
