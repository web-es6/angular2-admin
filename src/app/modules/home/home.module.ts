import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './welcome.component';
import { homeRoutesModule } from './home.routes';

@NgModule({
    imports: [homeRoutesModule],
    declarations: [
        HomeComponent,
        WelcomeComponent
    ]
})
export class HomeModule {

}
