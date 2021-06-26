import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRendererDirective]'
})
export class RendererDirectiveDirective implements OnInit {

  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red')
  }

  @HostListener('click') click(event:any){
    console.log('clicked')
  }
  
}
