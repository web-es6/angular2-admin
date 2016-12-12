import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './list/department-list.component';

const routes: Routes = [
    {
        path: 'web/department',
        component: DepartmentListComponent
    }
];

export const departmentRoutesModule = RouterModule.forRoot(routes);
