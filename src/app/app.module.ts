import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutesModule } from './app.routes';
import { AppDirectiveModule } from './directive';
import { LayoutComponent } from './layout';
import { LeftMenuComponent } from './layout/left-menu';
import { NavbarComponent } from './layout/navbar';
import { AppComponent } from './app.component';
import { NoContentComponent } from './modules/no-content';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './modules/home';
import { DepartmentModule } from './modules/department';

@NgModule({
    imports     : [
        BrowserModule,
        AppDirectiveModule,
        NgbModule.forRoot(),
        appRoutesModule,
        HomeModule,
        DepartmentModule,
    ],
    declarations: [
        AppComponent,
        LayoutComponent,
        NavbarComponent,
        LeftMenuComponent,
        NoContentComponent
    ],
    bootstrap   : [
        LayoutComponent,
    ]
})
export class AppModule {
}
