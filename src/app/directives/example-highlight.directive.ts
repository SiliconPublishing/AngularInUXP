import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class ExampleHighlightDirective {
  @Input() highlight = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setHighlight(this.highlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setHighlight('');
  }

  private setHighlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
