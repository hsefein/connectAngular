import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {StudentModule} from '../../model/studentmodule';
import {StudentModuleService} from '../../service/studentmodule-service';
import {Module} from '../../model/module';
import {StudentService} from '../../service/student-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-studentmodule-list',
  templateUrl: './studentmodule-list.component.html',
  styleUrls: ['./studentmodule-list.component.scss']
})
export class StudentmoduleListComponent implements OnInit {

  studentModules: StudentModule[] = [];

  @Input()
  student: Student;

  // constructor(
  //   public studentModuleService: StudentModuleService,
  //   public studentService: StudentService,
  //   protected activeRoute: ActivatedRoute) {
  //   activeRoute.params.subscribe( value => {
  //     this.studentService.get(value['id'], [
  //       {key: 'projection', value: 'detail'}
  //       ]).subscribe(student => {
  //      this.student = student;
  //       student.getRelationArray(StudentModule, 'studentModules' ).subscribe(studentModuleList => {
  //         studentModuleList.forEach(studentModule => {
  //           studentModule.getRelation(Module, 'module').subscribe(module => console.log(module));
  //         });
  //       })
  //       this.student = student;
  //     });
  //   });
  // }

  constructor(
    public studentModuleService: StudentModuleService,
    public studentService: StudentService,
    protected router: Router,
    protected activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(value => {
      this.studentService.get(value['id'], [ {key: 'projection', value: 'detail'}]
      ).subscribe(student => {
        this.student = student;
        student.getRelationArray(StudentModule, 'studentModules' ).subscribe(studentModuleList => {
          // console.log('mdoules');
          // console.log(studentModuleList);
          // studentModuleList.forEach(studentModule => {
          //   studentModule.getRelation(Module, 'module').subscribe(module => console.log(module));
          // });
        });
        this.student = student;

        this.studentModuleService.search('findByStudentId', {params: [
            {key: 'projection', value: 'detail'},
            {key: 'student_id', value: this.student.id}
          ]}).subscribe(value2 => {
          this.studentModules = value2;
        });

        // wasting network resources
        // this.ngOnInit();
      });
    });
  }

  ngOnInit(): void {
    // this.studentModuleService.getAll({params: [
    //     {key: 'projection', value: 'detail' }
    //   ]}).subscribe(value => {
    //   this.studentModules = value;
    // });
    // this.studentModuleService.search('findByStudentId', {params: [
    //     {key: 'projection', value: 'detail'},
    //     {key: 'student_id', value: this.student.id}
    //   ]}).subscribe(value => {
    //   this.studentModules = value;
    // });
  }

  delete(studentModule: StudentModule) {
    this.studentModuleService.delete(studentModule).subscribe(value => {
      this.ngOnInit();
    });
  }
}
