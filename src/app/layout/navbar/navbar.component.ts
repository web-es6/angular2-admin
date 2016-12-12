import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
    selector: 'navbar',
    styleUrls: ['./navbar.component.scss'],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    @Input() leftMenuFolded;
    @Output() leftMenuFoldedChange = new EventEmitter<boolean>();

    screenfullEnabled: boolean = screenfull.enabled;
    isFullScreen: boolean = false;

    constructor() {
        console.log(screenfull);
    }

    toggleLeftMenuFolded() {
        this.leftMenuFolded = !this.leftMenuFolded;
        this.leftMenuFoldedChange.emit(this.leftMenuFolded);
    }

    toggleFullScreen() {
        this.isFullScreen = !this.isFullScreen;
        screenfull.toggle();
    }
}
