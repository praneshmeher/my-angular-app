import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appRendererDirective]'
})
export class RendererDirectiveDirective implements OnInit {

  @HostBinding('style.background') color:any;
  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red')
  }

  @HostListener('click') onClick(event:any){
    console.log('clicked')
    this.color='green'
  }
  
}
