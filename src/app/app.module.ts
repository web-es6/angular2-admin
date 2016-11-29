import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home';
import { NoContentComponent } from './component/no-content';
import { Router } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        Router
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NoContentComponent,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule { }