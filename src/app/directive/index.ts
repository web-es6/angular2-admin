import { NgModule } from "@angular/core";
import { ToggleClassDirective } from './toggle-class.directive';

const DIRECTIVE_MODULES = [
    ToggleClassDirective,
];
@NgModule({
    declarations: DIRECTIVE_MODULES,
    exports: DIRECTIVE_MODULES
})
export class AppDirectiveModule {

}