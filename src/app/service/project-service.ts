import {Injectable, Injector} from '@angular/core';
import {RestService} from 'angular4-hal';
import {Project} from '../model/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService extends RestService <Project> {
  constructor(injector: Injector) {
    super(Project, 'projects', injector);
  }
}
