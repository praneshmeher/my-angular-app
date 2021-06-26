import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  list:Array<any> = []
  constructor() {
    this.list = ['Pranesh', 'Ganesh']
   }

  ngOnInit(): void {
  }

}
