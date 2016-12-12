import { NgModule } from '@angular/core';
import { departmentRoutesModule } from './department.routes';
import { DepartmentListComponent } from './list/department-list.component';

@NgModule({
    imports: [departmentRoutesModule],
    declarations: [
        DepartmentListComponent,
    ]
})
export class DepartmentModule {

}
