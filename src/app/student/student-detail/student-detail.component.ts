import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from '../../service/student-service';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '../../model/student';
import {FormControl} from '@angular/forms';
import {StudentModule} from '../../model/studentmodule';
import {Module} from '../../model/module';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  public students: Student[] = [];
  modules: Module[] = [];

  @Input()
  student: Student;
  StudentName = new FormControl();
  StudentDoB = new FormControl();

  constructor(
    public studentService: StudentService,
    protected router: Router,
    protected activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(value => {
      this.studentService.get(value['id'], [ {key: 'projection', value: 'detail'}]
      ).subscribe(student => {
        this.student = student;
        student.getRelationArray(StudentModule, 'studentModules' ).subscribe(studentModuleList => {
          console.log('mdoules')
          console.log(studentModuleList);
          studentModuleList.forEach(studentModule => {
            studentModule.getRelation(Module, 'module').subscribe(module => console.log(module));
          });
        });
        this.student = student;
        this.StudentName.setValue(this.student.name);
        this.StudentDoB.setValue(this.student.dateOfBirth);
      });
    });
  }

  ngOnInit(): void {
    // this.student.getRelation(StudentModule, 'studentModules').subscribe(studentModules => {
    //   console.log(studentModules);
    //   console.log(this.student);
    // });
    // this.studentService.getAll().subscribe((students: Student[]) => {
    //   this.students = students;
    //   this.moduleService.getAll().subscribe((modules: Module[]) => {
    //     this.modules = modules;
    //   });
    // });

  }

  editStudent(): void {
    this.student.name = this.StudentName.value;
    this.studentService
      .update(this.student)
      .subscribe(value => this.ngOnInit());
  }

}



// addStudentModule() {
//   const studentModule: StudentModule = new StudentModule();
//   studentModule.module = this.moduleSelect.value;
//   studentModule.student = this.studentSelect.value;
//
//   this.studentModuleService.create(studentModule).subscribe(value => {
//     this.router.navigate(["/home"]);
//   });
// }



// ngOnInit(): void {
//   this.studentService.getAll({
//     params: [
//       {'key': 'projection',
//         'value': 'detail'}
//     ]
//   }).subscribe(value => {
//     this.students = value;
//
//     // this.student[0].getRelationArray(StudentModule, 'studentModules').subscribe(studentModules => {
//     //   console.log(studentModules);
//     //   console.log(this.student[0]);
//     // });
//   });
//
// }



