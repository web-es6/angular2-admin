import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { appRoutesModule } from './app.routes';
import { AppDirectiveModule } from './directive';
import { LayoutComponent } from './layout';
import { LeftMenuComponent } from './layout/left-menu';
import { NavbarComponent } from './layout/navbar';
import { AppComponent } from './app.component';
import { NoContentComponent } from './modules/no-content';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './modules/home';
import { RegionCodeModule } from './modules/region-code';
import { DepartmentModule } from './modules/department';

@NgModule({
    imports     : [
        BrowserModule,
        HttpModule,
        AppDirectiveModule,
        NgbModule.forRoot(),
        appRoutesModule,
        HomeModule,
        RegionCodeModule,
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
