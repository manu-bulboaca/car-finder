import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultsComponent } from './results/results.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FindComponent } from './find/find.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {LoaderService} from "./loader/loader.service";

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    FindComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,

    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,

    MatGridListModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [
      LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
