import {Resource} from 'angular4-hal';
import {Student} from './student';
import {Module} from './module';

export class StudentModule extends Resource {

  // id: number;
  student: Student;
  module: Module;
}
