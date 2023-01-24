import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindComponent} from "./find/find.component";
import {ResultsDashboardComponent} from "./results-dashboard/results-dashboard.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'find' },
  { path: 'find', component: FindComponent },
  { path: 'results', component: ResultsDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
