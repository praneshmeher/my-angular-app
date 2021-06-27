import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const customObservable = Observable.create((observer:any)=>{
      observer.next('1')
      observer.next('2')
      observer.next('3')
      observer.complete()
      observer.error(new Error())
    })

    customObservable.pipe(
      map((data)=>{
        return 'map ' + data
      }),
      filter((data)=>{
        return data!=='map 2'
      })
    )
    .subscribe((data:any)=>{
      console.log(data)
    },(error:any)=>{
      console.log(error)
    },()=>{
      console.log('complete')
    })
  
  }
}
