import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentAddComponent} from './student/student-add/student-add.component';
import {ModuleAddComponent} from './module/module-add/module-add.component';
import {StudentmoduleAddComponent} from './studentmodule/studentmodule-add/studentmodule-add.component';
import {AppComponent} from './app.component';
import {StudentmoduleEditComponent} from './studentmodule/studentmodule-edit/studentmodule-edit.component';
import {StudentmoduleListComponent} from './studentmodule/studentmodule-list/studentmodule-list.component';
import {StudentmoduleDetailComponent} from './studentmodule/studentmodule-detail/studentmodule-detail.component';
import {StudentEditComponent} from './student/student-edit/student-edit.component';
import {StudentDetailComponent} from './student/student-detail/student-detail.component';
import {StudentListComponent} from './student/student-list/student-list.component';
import {ModuleEditComponent} from './module/module-edit/module-edit.component';
import {ModuleListComponent} from './module/module-list/module-list.component';
import {ModuleDetailComponent} from './module/module-detail/module-detail.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'prefix'},
  {path: 'home', component: HomeComponent},
  {path: 'student/student-add', component: StudentAddComponent},
  {path: 'student/student-edit/:id', component: StudentEditComponent},
  {path: 'student/student-list', component: StudentListComponent},
  {path: 'student/student-detail/:id', component: StudentDetailComponent},
  {path: 'module/module-add', component: ModuleAddComponent},
  {path: 'module/module-edit', component: ModuleEditComponent},
  {path: 'module/module-list', component: ModuleListComponent},
  {path: 'module/module-detail', component: ModuleDetailComponent},
  {path: 'studentmodule/studentmodule-add', component: StudentmoduleAddComponent},
  {path: 'studentmodule/studentmodule-edit', component: StudentmoduleEditComponent},
  {path: 'studentmodule/studentmodule-list', component: StudentmoduleListComponent},
  {path: 'studentmodule/studentmodule-detail', component: StudentmoduleDetailComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
