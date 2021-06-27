import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

  data = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('async data')
    }, 2000)
  })
  constructor() { }

  ngOnInit(): void {
  }

}
