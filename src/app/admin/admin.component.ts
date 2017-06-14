import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

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
