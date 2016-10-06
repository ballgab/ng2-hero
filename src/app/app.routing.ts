import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { HeroDetailComponent }      from './hero-detail/hero-detail.component';

const appRoutes: Routes = [
  {path: "", redirectTo: "heroes", pathMatch: "full"},
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
