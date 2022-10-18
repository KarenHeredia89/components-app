import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor( private el:ElementRef ) {
    console.log('Directiva llamada');
   }

   @Input("appResaltar") newColor:string = '';

   @HostListener('mouseenter') mouseHoverIn() {
    this.resaltar(this.newColor || "yellow");

   }
   @HostListener('mouseleave') mouseHoverOut() {
    this.el.nativeElement.style.backgroundColor = null;
   }

   private resaltar(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
   }

}
