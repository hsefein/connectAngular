import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {StudentModule} from '../../model/studentmodule';
import {StudentModuleService} from '../../service/studentmodule-service';
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

  ngOnInit() {
  }

  delete(studentModule: StudentModule) {
    this.studentModuleService.delete(studentModule).subscribe(value => {
      this.ngOnInit();
    });
  }
}
