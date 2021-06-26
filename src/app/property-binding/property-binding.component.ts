import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  disableClick=true
  constructor() {
    setTimeout(() => {
      this.disableClick=false
    }, 5000);
   }

  ngOnInit(): void {
  }

}
