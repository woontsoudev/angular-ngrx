import { Directive, ElementRef, Input, AfterViewChecked } from '@angular/core';

@Directive({ selector: '[appMinHeightLayoutCalc]' })
export class MinHeightLayoutCalcDirective implements AfterViewChecked {
  constructor(private el: ElementRef) {}

  @Input('header') header;
  @Input('footer') footer;

  ngAfterViewChecked(): void {
    if (this.header && this.footer) {
      const remainingHeight = this.header.offsetHeight + this.footer.offsetHeight;
      this.el.nativeElement.style.setProperty('--main-height', `calc(100vh - ${remainingHeight}px`);
    }
  }

}
