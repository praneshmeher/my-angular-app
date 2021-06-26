import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @ViewChild('myinput', {static:true}) myinput:any;
  constructor() {
   }

  ngOnInit(): void {
  }

  onClick(){
    console.log(this.myinput)
  }

}
