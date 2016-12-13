import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { departmentRoutesModule } from './department.routes';
import { DepartmentService } from './department.service';
import { DepartmentListComponent } from './list/department-list.component';
import { DepartmentEditComponent } from './edit/department-edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        departmentRoutesModule,
    ],
    declarations: [
        DepartmentListComponent,
        DepartmentEditComponent,
    ],
    providers: [
        DepartmentService,
    ]
})
export class DepartmentModule {

}
