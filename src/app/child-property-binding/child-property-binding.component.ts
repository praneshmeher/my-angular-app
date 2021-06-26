import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-property-binding',
  templateUrl: './child-property-binding.component.html',
  styleUrls: ['./child-property-binding.component.css']
})
export class ChildPropertyBindingComponent implements OnInit {

  @Input('data-alias') data:Array<any> = []
  constructor() { }

  ngOnInit(): void {
  }

}
