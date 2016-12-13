import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { departmentRoutesModule } from './department.routes';
import { DepartmentListComponent } from './list/department-list.component';
import { DepartmentService } from './department.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        departmentRoutesModule,
    ],
    declarations: [
        DepartmentListComponent,
    ],
    providers: [
        DepartmentService,
    ]
})
export class DepartmentModule {

}
