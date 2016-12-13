import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[permissionId]'
})
export class PermissionIdDirective {
    @Input() requirePermission: number;

    constructor(private element: ElementRef, private renderer: Renderer) {

    }

    ngOnInit() {
        this.renderer.setElementClass(this.element.nativeElement, 'authorized', true);
    }
}
