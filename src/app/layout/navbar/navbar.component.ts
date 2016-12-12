import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'navbar',
    styleUrls: ['./navbar.component.scss'],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    @Input() leftMenuFolded;
    @Output() leftMenuFoldedChange = new EventEmitter<boolean>();

    toggleLeftMenuFolded() {
        this.leftMenuFolded = !this.leftMenuFolded;
        this.leftMenuFoldedChange.emit(this.leftMenuFolded);
    }
}