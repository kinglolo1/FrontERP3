import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './component/login/login.component';

export const Approutes: Routes = [
  { 
    path: '',  component: FullComponent,
    children: [
      {path: '', component:LoginComponent, pathMatch:'full'},
      {path: 'login', component:LoginComponent},
      {
        path: 'dashboard', 
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) , canActivate: [AuthGuard]
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule) , canActivate: [AuthGuard]
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule), canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '**', component:FullComponent, pathMatch:'full', canActivate: [AuthGuard]
  }
];
