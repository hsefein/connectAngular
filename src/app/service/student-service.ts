import {Injectable, Injector} from '@angular/core';
import {RestService} from 'angular4-hal';
import {Student} from '../model/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService extends RestService <Student> {
  constructor(injector: Injector) {
    super(Student, 'students', injector);
  }
}
