import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { departmentRoutesModule } from './department.routes';
import { DepartmentListComponent } from './list/department-list.component';
import { DepartmentService } from './department.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
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
