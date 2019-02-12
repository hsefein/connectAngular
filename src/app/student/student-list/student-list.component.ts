import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../service/student-service';
import {Student} from '../../model/student';
import {FormControl} from '@angular/forms';
import {StudentModule} from '../../model/studentmodule';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getAll({
      params: [
        {'key': 'projection',
        'value': 'detail'}
      ]
    }).subscribe(value => {
      this.students = value;

      // this.student[0].getRelationArray(StudentModule, 'studentModules').subscribe(studentModules => {
      //   console.log(studentModules);
      //   console.log(this.student[0]);
      // });
    });

  }

  delete(student: Student) {
    this.studentService.delete(student).subscribe(value => {
      this.ngOnInit();
    });

  }
}
