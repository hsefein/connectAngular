import {Component, Input, OnInit} from '@angular/core';
import {StudentModuleService} from '../../service/studentmodule-service';
import {StudentService} from '../../service/student-service';
import {ModuleService} from '../../service/module.service';
import {StudentModule} from '../../model/studentmodule';
import {Student} from '../../model/student';
import {Module} from '../../model/module';
import {FormControl} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-studentmodule-add',
  templateUrl: './studentmodule-add.component.html',
  styleUrls: ['./studentmodule-add.component.scss']
})
export class StudentmoduleAddComponent implements OnInit {

  @Input()
  student: Student;
  public modules: Module[] = [];
  StudentName = new FormControl();
  moduleSelect = new FormControl();

  constructor(
    public studentModuleService: StudentModuleService,
    public studentService: StudentService,
    public moduleService: ModuleService,
    protected router: Router,
    public activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(value => {
      this.studentService.get(value['id']).subscribe( student => {
        this.student = student;
        this.StudentName.setValue(this.student.name);
        this.moduleService.getAll().subscribe((modules: Module[]) => {
          this.modules = modules;
        });
      });
    });
  }

  addStudentModule(): void {
    const studentModule: StudentModule = new StudentModule();
    studentModule.module = this.moduleSelect.value;
    studentModule.student = this.student;

    this.studentModuleService.create(studentModule).subscribe(value => {
      // this.ngOnInit();
        this.router.navigate(['/home']);
    }, error1 => {
      alert(`Could not update: ${error1}`);
    });
  }
}
