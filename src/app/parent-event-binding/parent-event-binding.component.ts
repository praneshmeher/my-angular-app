import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-event-binding',
  templateUrl: './parent-event-binding.component.html',
  styleUrls: ['./parent-event-binding.component.css']
})
export class ParentEventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  parentClick(event:any){
    console.log('parent', event)
  }

}
