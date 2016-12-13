import { NgModule } from '@angular/core';
import { departmentRoutesModule } from './department.routes';
import { DepartmentListComponent } from './list/department-list.component';
import { DepartmentService } from './department.service';

@NgModule({
    imports: [departmentRoutesModule],
    declarations: [
        DepartmentListComponent,
    ],
    providers: [
        DepartmentService,
    ]
})
export class DepartmentModule {

}
