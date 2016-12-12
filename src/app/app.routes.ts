import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout';
import { AppComponent } from './app.component';
import { NoContentComponent } from './modules/no-content';
import { HomeComponent } from "./modules/home/home.component";


const routes: Routes = [
    {
        path: '',
        redirectTo: 'web',
        pathMatch: 'full'
    }, {
        path: 'web',
        component: AppComponent,
    }, {
        path: '**',
        component: NoContentComponent
    }
];

export const AppRoutesModule = RouterModule.forRoot(routes);