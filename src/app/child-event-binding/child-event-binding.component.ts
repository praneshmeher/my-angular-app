import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-event-binding',
  templateUrl: './child-event-binding.component.html',
  styleUrls: ['./child-event-binding.component.css']
})
export class ChildEventBindingComponent implements OnInit {

  @Output() emittedevent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onChildClick(){
    this.emittedevent.emit('child data')
  }

}
