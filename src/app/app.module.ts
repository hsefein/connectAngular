import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularHalModule} from 'angular4-hal';
import {ExternalConfigurationService} from './external-configuration-service';
import {ProjectService} from './service/project-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularHalModule.forRoot()
  ],
  providers: [
    {provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService},
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }