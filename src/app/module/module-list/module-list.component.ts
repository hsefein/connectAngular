import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {Module} from '../../model/module';
import {StudentService} from '../../service/student-service';
import {ModuleService} from '../../service/module.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  modules: Module[] = [];

  constructor(public moduleService: ModuleService) { }

  ngOnInit() {
    this.moduleService.getAll().subscribe(value => {
      this.modules = value;
    });
  }


  delete(module: Module) {
    this.moduleService.delete(module).subscribe(value => {
      this.ngOnInit();
    });

  }
}
