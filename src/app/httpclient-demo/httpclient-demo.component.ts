import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-httpclient-demo',
  templateUrl: './httpclient-demo.component.html',
  styleUrls: ['./httpclient-demo.component.css']
})
export class HttpclientDemoComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.post("https://reqres.in/api/users",{
      "name": "morpheus",
      "job": "leader"
    })
    .subscribe((data)=>{
      console.log(data)
    })

    this.http.get("https://reqres.in/api/users?page=2")
    .subscribe((data)=>{
      console.log(data)
    })
  }

}
