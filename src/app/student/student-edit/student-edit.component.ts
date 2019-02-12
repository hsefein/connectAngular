import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {StudentService} from '../../service/student-service';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '../../model/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {

  @Input()
  student: Student;
  StudentName = new FormControl();
  StudentDoB = new FormControl();

  constructor(public studentService: StudentService, protected router: Router, protected activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(value => {
      this.studentService.get(value['id']).subscribe(student => {
        this.student = student;
        this.StudentName.setValue(this.student.name);
      });
    });

  }

  ngOnInit() {

  }

  editStudent(): void {
    this.student.name = this.StudentName.value;
    this.studentService
      .update(this.student)
      .subscribe(value => this.ngOnInit());
  }
}
