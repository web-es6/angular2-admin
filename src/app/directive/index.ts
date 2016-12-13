import { NgModule } from '@angular/core';
import { ToggleClassDirective } from './toggle-class.directive';
import { FocusClassDirective } from './focus-class.directive';
import { PermissionIdDirective } from './permission-id.directive';

const DIRECTIVE_MODULES = [
    ToggleClassDirective,
    FocusClassDirective,
    PermissionIdDirective,
];
@NgModule({
    declarations: DIRECTIVE_MODULES,
    exports: DIRECTIVE_MODULES
})
export class AppDirectiveModule {

}
