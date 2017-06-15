import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string;
  // projects: FirebaseListObservable<any[]>;
  projectToDisplay;
  widthNum = 0;
  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) {

  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });

    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.projectToDisplay = dataLastEmittedFromObserver;

      this.widthNum = (parseInt(this.projectToDisplay.raisedAmount)/parseInt(this.projectToDisplay.askingAmount))*100;

    })
  //  var percentageFunded = (parseInt(this.projectToDisplay.raisedAmount)/(parseInt(this.projectToDisplay.askingAmount))) * 100;

  }

  submitPledge(amount1, amount2, project) {
    // if (/[0-9]+/.test(amount1)) {
    amount1 = Math.ceil(amount1);
    if (amount1 != ''&& amount1 >= 0) {
      var total = parseInt(amount1) + parseInt(amount2);
      project.raisedAmount = total;

      this.projectService.updateProject(project);
    }
  }

}
