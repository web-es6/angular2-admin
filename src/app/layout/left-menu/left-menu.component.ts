import { Component, Input } from '@angular/core';

@Component({
    selector: 'left-menu',
    styleUrls: ['./left-menu.component.scss'],
    templateUrl: './left-menu.component.html'
})
export class LeftMenuComponent {
    @Input() leftMenuFolded;
}