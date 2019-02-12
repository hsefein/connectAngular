import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { ModuleAddComponent } from './module/module-add/module-add.component';
import { ModuleEditComponent } from './module/module-edit/module-edit.component';
import { ModuleDetailComponent } from './module/module-detail/module-detail.component';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StudentListComponent } from './student/student-list/student-list.component';
import { ModuleListComponent } from './module/module-list/module-list.component';
import { StudentmoduleListComponent } from './studentmodule/studentmodule-list/studentmodule-list.component';
import { StudentmoduleAddComponent } from './studentmodule/studentmodule-add/studentmodule-add.component';
import { StudentmoduleDetailComponent } from './studentmodule/studentmodule-detail/studentmodule-detail.component';
import { StudentmoduleEditComponent } from './studentmodule/studentmodule-edit/studentmodule-edit.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AngularHalModule} from 'angular4-hal';
import {ExternalConfigurationService} from './external-configuration-service';
import {ModuleService} from './service/module.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentDetailComponent,
    ModuleAddComponent,
    ModuleEditComponent,
    ModuleDetailComponent,
    StudentListComponent,
    ModuleListComponent,
    StudentmoduleListComponent,
    StudentmoduleAddComponent,
    StudentmoduleDetailComponent,
    StudentmoduleEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatBadgeModule,
    FormsModule,
    AngularHalModule.forRoot()
    // RouterModule
  ],
  exports: [
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    {provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService},
    ModuleService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
