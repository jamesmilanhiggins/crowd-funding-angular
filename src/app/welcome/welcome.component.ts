import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ProjectService]
})
export class WelcomeComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  categoryFilter = "allProjects";
  featured = "All";

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
     this.projects = this.projectService.getProjects();
  }
   onChange(optionFromMenu) {
     this.categoryFilter = optionFromMenu;
   }

   onChangeFeatured(optionFromMenu) {
     this.featured = optionFromMenu;
   }


   changeFeatureCheckValue(project) {
     project.featured = '1';
     this.projectService.updateProject(project);
   }
   changeFeatureUnCheckValue(project) {
     project.featured = '0';
     this.projectService.updateProject(project);
   }

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  };

}
