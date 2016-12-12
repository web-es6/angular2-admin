import { Routes, RouterModule }  from '@angular/router';

import { HomeComponent } from './home.component';
import { WelcomeComponent } from './welcome.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: 'web/home',
        component: HomeComponent,
        children: [
            {
                path: 'welcome',
                component: WelcomeComponent
            }
        ]
    }
];

export const HomeRoutesModule = RouterModule.forChild(routes);
