import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './list/department-list.component';
import { DepartmentEditComponent } from './edit/department-edit.component';

const routes: Routes = [
    {
        path     : 'web/department',
        component: DepartmentListComponent,
    }, {
        path     : 'web/department/new',
        component: DepartmentEditComponent,
    }, {
        path     : 'web/department/:id',
        component: DepartmentEditComponent,
    }
];

export const departmentRoutesModule = RouterModule.forRoot(routes);
