import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  name='Pranesh'
  date = new Date().toISOString()
  constructor() { }

  ngOnInit(): void {
  }

}
