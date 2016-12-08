import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[toggleClass]'
})
export class ToggleClassDirective {
    @Input() toggleClass: string;
    toggled: boolean = false;

    constructor(private element: ElementRef, private renderer: Renderer) {
    }

    @HostListener("click") onClick() {
        this.toggled = !this.toggled;
        this.renderer.setElementClass(this.element.nativeElement, this.toggleClass, this.toggled);
    }

}