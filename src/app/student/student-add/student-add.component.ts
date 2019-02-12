import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {FormControl} from '@angular/forms';
import {StudentService} from '../../service/student-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  students: Student[] = [];
  StudentName = new FormControl();
  DoB = new FormControl();

  constructor(public studentService: StudentService, protected router: Router) { }

  ngOnInit(): void {
    this.studentService.getAll().subscribe(value => {
      this.students = value;
    });
  }

  addStudent() {
    const student: Student = new Student();

    student.name = this.StudentName.value;
    student.dateOfBirth = this.DoB.value;

    this.studentService.create(student).subscribe(value => {
      this.ngOnInit();
      this.router.navigate(["/home"])
    }, error1 => {
      alert(`Could not update: ${error1}`);
    });

  }
}
