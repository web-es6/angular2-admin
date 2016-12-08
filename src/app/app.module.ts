import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './component/main';
import { HomeComponent } from './component/home';
import { NoContentComponent } from './component/no-content';
import { Router } from './app.routes';
import {WelcomeComponent} from "./component/welcome/welcome.component";

@NgModule({
    imports: [
        BrowserModule,
        Router
    ],
    declarations: [
        MainComponent,
        HomeComponent,
        NoContentComponent,
        WelcomeComponent,
    ],
    bootstrap: [
        MainComponent,
    ]
})
export class AppModule { }