import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpServiceService } from "../http-service/http-service.service";

@Component({
  selector: 'app-httpclient-demo',
  templateUrl: './httpclient-demo.component.html',
  styleUrls: ['./httpclient-demo.component.css']
})
export class HttpclientDemoComponent implements OnInit {

  constructor(private http:HttpServiceService) { }

  ngOnInit(): void {
    
    this.http.postData({
      "name": "morpheus",
      "job": "leader"
    })

    this.http.getData().subscribe((data)=>{
      console.log(data)
    },(error)=>{
      console.log(error)
    })
    
  }

}
