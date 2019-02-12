import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentmodule-detail',
  templateUrl: './studentmodule-detail.component.html',
  styleUrls: ['./studentmodule-detail.component.scss']
})
export class StudentmoduleDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.studentModuleService.search('findByStudentId', {params: [
    //     {key: 'projection', value: 'detail' },
    //     {key: 'student_id', value: 1}
    //   ]}).subscribe(value => {
    //   this.studentModules = value;
    // });
  }

}
