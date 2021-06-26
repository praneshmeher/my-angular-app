import { 
  Component, 
  OnInit,
  OnChanges, 
  SimpleChanges, 
  Input, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() data:string=''
  constructor() {
    console.log('constructor called')
   }

  ngOnInit(): void {
    // called once the component is initialized
    console.log('ngOnInit called')
  }

  ngOnChanges(changes:SimpleChanges){
    // called after a bound input property changes
    // @Input()
    console.log('ngOnChanges called', changes)
  }

  ngDoCheck(){
    // called during every change detection run
    // events proprty 
    console.log('ngDoCheck called')
  }

  ngAfterContentInit(){
    // called after content has been projected into view 
    // ng-content
    console.log('ngAfterContentInit called')
  }

  ngAfterContentChecked(){
    // called every time the projected content has been checked
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit(){
    // called after component's view has been initialized
    console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked(){
    // called every time the view have been checked
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(){
    // called once the component is about to be destroyed
    console.log('ngOnDestroy called')
  }

}
