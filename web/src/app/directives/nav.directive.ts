import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNav]'
})
export class NavDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'red'
  }

}
