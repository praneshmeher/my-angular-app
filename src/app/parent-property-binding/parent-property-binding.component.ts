import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-property-binding',
  templateUrl: './parent-property-binding.component.html',
  styleUrls: ['./parent-property-binding.component.css']
})
export class ParentPropertyBindingComponent implements OnInit {

  list:Array<any> = []
  constructor() {
    this.list = ['Pranesh', 'Ganesh']
   }

  ngOnInit(): void {
  }

}
