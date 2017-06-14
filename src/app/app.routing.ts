import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AdminComponent }   from './admin/admin.component';



const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }



];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
