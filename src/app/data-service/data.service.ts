import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:Array<any>=[]
  dataUpdated= new EventEmitter()
  constructor() { }

}
