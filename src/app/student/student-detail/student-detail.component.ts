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
  StudentDoB = new FormControl(new Date().toISOString());

  constructor(
    public studentService: StudentService,
    protected router: Router,
    protected activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(value => {
      this.studentService.get(value['id'], [ {key: 'projection', value: 'detail'}]
      ).subscribe(student => {
        this.student = student;
        student.getRelationArray(StudentModule, 'studentModules' ).subscribe(studentModuleList => {
          console.log('modules');
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

  ngOnInit() {
  }

}



