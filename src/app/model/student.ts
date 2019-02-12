import {Resource} from 'angular4-hal';

class StudentModules {
}

export class Student extends Resource {

  // id: number;
  name: string;
  dateOfBirth: Date;
  studentModules: StudentModules[];
}
