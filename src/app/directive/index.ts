import { NgModule } from '@angular/core';
import { ToggleClassDirective } from './toggle-class.directive';
import { FocusClassDirective } from './focus-class.directive';

const DIRECTIVE_MODULES = [
    ToggleClassDirective,
    FocusClassDirective,
];
@NgModule({
    declarations: DIRECTIVE_MODULES,
    exports: DIRECTIVE_MODULES
})
export class AppDirectiveModule {

}
