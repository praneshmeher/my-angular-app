import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent implements OnInit {

  @ContentChild('parencontentref') contentref:any
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(){
    console.log(this.contentref)
  }

}
