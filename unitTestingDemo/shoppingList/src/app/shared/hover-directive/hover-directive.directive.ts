import { Directive, HostBinding } from '@angular/core';
import { ElementRef, Renderer,HostListener } from '@angular/core';



@Directive({
  selector: '[hoverdirective]'
})
export class HoverDirectiveDirective {
  @HostBinding('class.blue-border')  ishovering: boolean;
  constructor() {}
  
  
  @HostListener('mouseover') onMouseOver(){
    
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut(){
    this.ishovering = false;
  }

}
