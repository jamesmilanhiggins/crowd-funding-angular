import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  projects: Project[] = [
    new Project('James Ferrari', 'James Higgins', 'Help James afford highly expedient transportation', 400000, 0, 'Head to the nearest Ferrari Dealership', 0, 'Selfish', 0, 0, 'http://st.motortrend.com/uploads/sites/10/2015/09/2014-Ferrari-California-three-quarters-in-motion-front-view-001.jpg', 'http://i.dailymail.co.uk/i/pix/2015/06/20/00/29CAF9C200000578-0-image-a-39_1434756545679.jpg'),
    new Project('Kens Audi R8', 'Ken Rutan', 'Help Ken afford slightly impractical transportation', 116000, 0, 'Purchase an Audi', 0, 'Selfish', 0, 0, 'https://blogs-images.forbes.com/jasonfogelson/files/2016/03/02-ams-alpha-10-audi-r8-1200x799.jpg', 'https://qph.ec.quoracdn.net/main-qimg-8aefdb2e948fbd7880fc91ecee37a238-c')


// public name: string
// public authors: string
// public description: string
// public askingAmount: number
// public raisedAmount: number
// public plans: string
// public swag: boolean
// public category: string
// public favorited: boolean
// public featured: boolean
// public image: string
// public authorImage: string)


];

  constructor() { }

  ngOnInit() {
  }

}
