import {Injectable, Injector} from '@angular/core';
import {RestService} from 'angular4-hal';
import {StudentModule} from '../model/studentmodule';

@Injectable({
  providedIn: 'root'
})

export class StudentModuleService extends RestService <StudentModule> {
  constructor(injector: Injector) {
    super(StudentModule, 'studentModules', injector);
  }
}
