import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home';
import { NoContentComponent } from './component/no-content';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    }, {
        path: '**',
        component: NoContentComponent,
    }
];

export const Router = RouterModule.forRoot(routes);