import { NgModule } from "@angular/core";
import { DepartmentRoutesModule } from './department.routes';
import { DepartmentListComponent } from './list/department-list.component';

@NgModule({
    imports: [DepartmentRoutesModule],
    declarations: [
        DepartmentListComponent,
    ]
})
export class DepartmentModule {

}