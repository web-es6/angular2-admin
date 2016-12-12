import { Component } from '@angular/core';
import { WelcomeComponent } from "./welcome.component";

@Component({
    selector   : 'home-panel',
    templateUrl: './home.component.html',
    styleUrls  : ['./home.component.scss'],
})
export class HomeComponent {
    name = 'Angular2';
}