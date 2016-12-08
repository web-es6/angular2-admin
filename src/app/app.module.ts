import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from './app.routes';
import { MainComponent } from './component/main';
import { HomeComponent } from './component/home';
import { NoContentComponent } from './component/no-content';
import { WelcomeComponent } from "./component/welcome/welcome.component";
import { AppDirectiveModule } from './directive';

@NgModule({
    imports: [
        Router,
        BrowserModule,
        AppDirectiveModule
    ],
    declarations: [
        MainComponent,
        HomeComponent,
        NoContentComponent,
        WelcomeComponent
    ],
    bootstrap: [
        MainComponent,
    ]
})
export class AppModule { }