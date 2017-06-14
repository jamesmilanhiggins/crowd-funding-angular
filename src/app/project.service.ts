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

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  getProjectById(projectId: string) {

    var toReturn = this.database.object('projects/' + projectId);

    return toReturn;
    // return this.database.object('projects/' + projectId);
  }

  updateProject(localUpdatedProject){
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({
      name: localUpdatedProject.name,
      authors: localUpdatedProject.authors,
      description: localUpdatedProject.description,
      askingAmount: localUpdatedProject.askingAmount,
      raisedAmount: localUpdatedProject.raisedAmount,
      plans: localUpdatedProject.plans,
      swag: localUpdatedProject.swag,
      category: localUpdatedProject.category,
      favorited: localUpdatedProject.favorited,
      featured: localUpdatedProject.featured,
      image: localUpdatedProject.image,
      authorImage: localUpdatedProject.authorImage
    });
  }
  
}
