import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";


export const routes: Routes = [
  {
    path: '',
    // component: HomeComponent
    loadComponent: () => import('../dashboard/dashboard.component').then((c) => c.DashboardComponent)
  },
  {
    path: 'about-me',
    loadComponent: () => import('../about-me/about-me.component').then((c) => c.AboutMeComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('../contact/contact.component').then((c) => c.ContactComponent)
  }
]
