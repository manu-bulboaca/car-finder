import { Routes } from '@angular/router';
import {FindComponent} from "./find/find.component";
import {ResultsComponent} from "./results/results.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'find' },
  // TODO: use "loadComponent" instead of "component"
  { path: 'find', component: FindComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'more', loadChildren: () => import('./more/more.module').then(module => module.MoreModule)}
];
