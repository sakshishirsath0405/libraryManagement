
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { TutorialsListComponent } from '../../components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from '../../components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from '../../components/add-tutorial/add-tutorial.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'tutorials', component: TutorialsListComponent },
      { path: 'tutorials/:id', component: TutorialDetailsComponent },
      { path: 'add', component: AddTutorialComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AdminRoutingModule { }
