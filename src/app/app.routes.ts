import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home';
import { NoContentComponent } from './component/no-content';
import { WelcomeComponent } from './component/welcome';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'welcome',
                component: WelcomeComponent,
            }
        ]
    }, {
        path: '**',
        component: NoContentComponent,
    }
];

export const Router = RouterModule.forRoot(routes);