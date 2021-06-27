import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service'

@Component({
  selector: 'app-data-service-one',
  templateUrl: './data-service-one.component.html',
  styleUrls: ['./data-service-one.component.css']
})
export class DataServiceOneComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.dataService.data.push('new data')
  }

}
