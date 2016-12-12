import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[focusClass]'
})
export class FocusClassDirective {
    @Input() focusClass: string;

    constructor(private element: ElementRef, private renderer: Renderer) {
    }

    @HostListener('mouseenter') onMouseenter() {
        this.renderer.setElementClass(this.element.nativeElement, this.focusClass, true);
    }

    @HostListener('mouseleave') onMouseleave() {
        this.renderer.setElementClass(this.element.nativeElement, this.focusClass, false);
    }

}
