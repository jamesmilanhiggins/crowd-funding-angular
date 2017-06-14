import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    console.log(projectId);
    var toReturn = this.database.object('projects/' + projectId);
    console.log(toReturn);
    return toReturn;
    // return this.database.object('projects/' + projectId);
  }

}
