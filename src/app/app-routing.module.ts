import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'find' },
  { path: 'find', loadComponent: () => import('./find/find.component')},
  { path: 'results', loadComponent: () => import('./results/results.component') },
  { path: 'more', loadComponent: () => import('./more-details/more-details.component')}
];
