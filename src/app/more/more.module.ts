import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MatExpansionModule} from '@angular/material/expansion';
import {MoreDetailsComponent} from "./more-details/more-details.component";
import {MatButtonModule} from "@angular/material/button";


const MORE_ROUTES: Routes = [{ path: '', component: MoreDetailsComponent }];
export const MORE_ROUTING = RouterModule.forChild(MORE_ROUTES);


// TODO: This file should be removed as the MoreModules is not needed anymore

@NgModule({
  declarations: [
    MoreDetailsComponent
  ],
  imports: [
    CommonModule,
    MORE_ROUTING,
    MatExpansionModule,
    MatButtonModule,
  ]
})
export class MoreModule { }
