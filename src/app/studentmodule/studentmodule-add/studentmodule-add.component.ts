import { Component, OnInit } from '@angular/core';
import {StudentModuleService} from '../../service/studentmodule-service';
import {StudentService} from '../../service/student-service';
import {ModuleService} from '../../service/module.service';
import {StudentModule} from '../../model/studentmodule';
import {Student} from '../../model/student';
import {Module} from '../../model/module';
import {FormControl} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {Router} from '@angular/router';

@Component({
  selector: 'app-studentmodule-add',
  templateUrl: './studentmodule-add.component.html',
  styleUrls: ['./studentmodule-add.component.scss']
})
export class StudentmoduleAddComponent implements OnInit {

  public students: Student[] = [];
  public modules: Module[] = [];
  studentSelect: FormControl = new FormControl();
  moduleSelect: FormControl = new FormControl();

  constructor(
    public studentModuleService: StudentModuleService,
    public studentService: StudentService,
    public moduleService: ModuleService,
    protected router: Router) {

  }

  ngOnInit() {
    this.studentService.getAll().subscribe((students: Student[]) => {
      this.students = students;
      this.moduleService.getAll().subscribe((modules: Module[]) => {
        this.modules = modules;
      });
    });

  }


  addStudentModule() {
    const studentModule: StudentModule = new StudentModule();
    studentModule.module = this.moduleSelect.value;
    studentModule.student = this.studentSelect.value;

    this.studentModuleService.create(studentModule).subscribe(value => {
        this.router.navigate(["/home"]);
    }
    , error1 => {
      alert('error');
    });
  }
}
