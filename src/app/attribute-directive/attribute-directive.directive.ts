import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]'
})
export class AttributeDirectiveDirective implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(){
    this.elementRef.nativeElement.style.color = 'green'
  }

}
