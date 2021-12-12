import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-articlecard',
  templateUrl: './articlecard.component.html',
  styleUrls: ['./articlecard.component.css']
})
export class ArticlecardComponent {

  constructor() { }

  @Input() articleMiniature: string = '';
  @Input() excerpt: string = '';
  @Input() title: string = '';
  @Input() lang: string = '';


}
