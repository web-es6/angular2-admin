import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[requirePermission]'
})
export class RequirePermissionDirective {
    @Input() requirePermission: number;

    constructor(private element: ElementRef, private renderer: Renderer) {

    }

    ngOnInit() {
        this.renderer.setElementClass(this.element.nativeElement, 'permission-authorized', true);
    }
}
