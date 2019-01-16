import {Component, OnInit} from '@angular/core';
import {Project} from './model/project';
import {ProjectService} from './service/project-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'connectAngular';
  projects: Project[] = [];

  constructor(public projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.projectService.getAll().subscribe(value => {
      this.projects = value;
    });
}

addProject(project_name: string) {
    const project: Project = new Project();
    project.project_name = project_name;
    this.projectService.create(project).subscribe(value => {
      this.ngOnInit();
    });
}

deleteProject(project: Project) {
    this.projectService.delete(project).subscribe(value => {
      this.ngOnInit();
    });
  }

}




