import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService, AngularFireAuth]
})

export class AdminComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(private projectService: ProjectService, public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }


  ngOnInit() {

  }

  submitForm(
    name: string,
    authors: string,
    description: string,
    askingAmount: number,
    raisedAmount: number,
    plans: string,
    swag: number,
    category: string,
    favorited: number,
    featured: number,
    image: string,
    authorImage: string) {
    var newProject: Project = new Project( name, authors, description, askingAmount, raisedAmount, plans, swag, category, favorited, featured, image, authorImage)
    console.log(newProject);
    this.projectService.addProject(newProject);
    }

}
