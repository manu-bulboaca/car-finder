import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindComponent} from "./find/find.component";
import {ResultsComponent} from "./results/results.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'find' },
  { path: 'find', component: FindComponent },
  { path: 'results', component: ResultsComponent }
];


// TODO: The AppRoutingModule is not needed anymore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
