import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './welcome.component';
import { HomeRoutesModule } from './home.routes';

@NgModule({
    imports: [HomeRoutesModule],
    declarations: [
        HomeComponent,
        WelcomeComponent
    ]
})
export class HomeModule {

}