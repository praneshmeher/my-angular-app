import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service'

@Component({
  selector: 'app-data-service-two',
  templateUrl: './data-service-two.component.html',
  styleUrls: ['./data-service-two.component.css']
})
export class DataServiceTwoComponent implements OnInit {

  data:Array<any>=[]
  constructor(private dataService:DataService) { }


  ngOnInit(): void {
    this.data=this.dataService.data
    this.dataService.dataUpdated.subscribe((data)=>{
      console.log(data)
    })
  }

}
