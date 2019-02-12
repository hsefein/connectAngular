import {Component, Input, OnInit} from '@angular/core';
import {Module} from '../../model/module';
import {ModuleService} from '../../service/module.service';
import {FormControl} from '@angular/forms';
import {Student} from '../../model/student';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-module-add',
  templateUrl: './module-add.component.html',
  styleUrls: ['./module-add.component.scss']
})
export class ModuleAddComponent implements OnInit {

  modules: Module[] = [];

  ModuleName = new FormControl();

  // @Input()
  // module: Module;

  constructor(public moduleService: ModuleService, protected router: Router) { }

  ngOnInit() {
    this.moduleService.getAll().subscribe(value => {
      this.modules = value;
    });
  }

  addModule() {
    const module: Module = new Module();

    module.name = this.ModuleName.value;

    this.moduleService.create(module).subscribe(value => {
      this.ngOnInit();
      this.router.navigate(["/home"])
    }, (error1: HttpErrorResponse) => {
      console.log(error1);
      alert(error1.error.message);
    });
  }
}
