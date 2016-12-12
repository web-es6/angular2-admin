import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LeftMenuComponent } from '../left-menu/left-menu.component';

@Component({
    selector: 'app',
    styleUrls: ['./layout.component.scss'],
    templateUrl: './layout.component.html',
})
export class LayoutComponent {
    leftMenuFoled: boolean = false;
}
