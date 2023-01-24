import { Routes } from '@angular/router';
import {FindComponent} from "./find/find.component";
import {ResultsComponent} from "./results/results.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'find' },
  { path: 'find', component: FindComponent },
  { path: 'results', component: ResultsComponent }
];
