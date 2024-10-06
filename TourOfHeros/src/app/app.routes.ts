import { Routes } from '@angular/router';
import { HeroesComponent } from './view/heroes/heroes.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { HeroDetailComponent } from './view/hero-detail/hero-detail.component';

export const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
