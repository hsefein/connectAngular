import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {StudentModule} from '../../model/studentmodule';
import {StudentModuleService} from '../../service/studentmodule-service';

@Component({
  selector: 'app-studentmodule-list',
  templateUrl: './studentmodule-list.component.html',
  styleUrls: ['./studentmodule-list.component.scss']
})
export class StudentmoduleListComponent implements OnInit {

  studentModules: StudentModule[] = [];

  constructor(public studentModuleService: StudentModuleService) { }

  ngOnInit() {
    this.studentModuleService.getAll({params: [
        {key: 'projection', value: 'detail' }
      ]}).subscribe(value => {
      this.studentModules = value;
    });
    // this.studentModuleService.search('findByStudentId', {params: [
    //     {key: 'projection', value: 'detail' },
    //     {key: 'student_id', value: 1}
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
